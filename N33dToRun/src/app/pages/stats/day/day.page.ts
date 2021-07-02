import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import * as d3 from 'd3';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit { 

  private loaded: boolean = false;
  private places: Object;
  private sumPas: any;
  private sumDis: any;
  private sumDay: any;
  private sumCalorie: any;
  private moyenVit: any;
  constructor(){}

  private data = [
    {"Hour": "00H01 - 06H00", "Pas": "28", "Released": "2021"},
    {"Hour": "06H01 - 11H00", "Pas": "2526", "Released": "2021"},
    {"Hour": "11H01 - 14H00", "Pas": "200", "Released": "2021"},
    {"Hour": "14H01 - 19H00", "Pas": "1560", "Released": "2021"},
    {"Hour": "19H00 - 21H00", "Pas": "116", "Released": "2021"},
    {"Hour": "22H00 - 00H00", "Pas": "49", "Released": "2021"},
  ];

  private data2 = [
    {"Distance": "4.000km", "Time": "92", "Released": "2021", "Calorie": "1600", "Vitesse": "5"},
    {"Distance": "1.020km", "Time": "42", "Released": "2021", "Calorie": "408", "Vitesse": "6"},
    {"Distance": "0.300km", "Time": "10", "Released": "2021", "Calorie": "120", "Vitesse": "5"},
    {"Distance": "0.682km", "Time": "22", "Released": "2021", "Calorie": "272.8", "Vitesse": "7"},
    {"Distance": "2.106km", "Time": "62", "Released": "2021", "Calorie": "842.4", "Vitesse": "6"},
    {"Distance": "3.356km", "Time": "119", "Released": "2021", "Calorie": "1342.4", "Vitesse": "4"},
    {"Distance": "0.100km", "Time": "8", "Released": "2021", "Calorie": "40", "Vitesse": "8"},
    {"Distance": "1.480km", "Time": "93", "Released": "2021", "Calorie": "592", "Vitesse": "7"},
    {"Distance": "0.000km", "Time": "992", "Released": "2021", "Calorie": "0", "Vitesse": "0"},
  ];

  private svg;
  private margin = 60;
  private width = 350 - (this.margin * 2);
  private height = 350 - (this.margin * 2);

  private svgpie;
  private marginpie = 40;
  private widthpie = 380;
  private heightpie = 350;
  private radius = Math.min(this.widthpie, this.heightpie) / 2 - this.marginpie;
  private colors;

  private createSvg1(): void {
    this.svg = d3.select("figure#barDay")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}

private drawBars1(data: any[]): void {
  // Create the X-axis band scale
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.Hour))
  .padding(0.2);
  // Draw the X-axis on the DOM
  this.svg.append("g")
  .attr("transform", "translate(0," + this.height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

  // Create the Y-axis band scale
  const y = d3.scaleLinear()
  .domain([0, 3000])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", d => x(d.Hour))
  .attr("y", d => y(d.Pas))
  .attr("width", x.bandwidth())
  .attr("height", (d) => this.height - y(d.Pas))
  .attr("fill", "#d04a35");
}

private createColors1(): void {
  this.colors = d3.scaleOrdinal()
  .domain(this.data.map(d => d.Pas.toString()))
  .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
}

private createSvgPie1(): void {
  this.svgpie = d3.select("figure#pieDay")
  .append("svg")
  .attr("width", this.widthpie)
  .attr("height", this.heightpie)
  .append("g")
  .attr(
    "transform",
    "translate(" + this.widthpie / 2 + "," + this.heightpie / 2 + ")"
  );
}

private drawChart1(): void {
  // Compute the position of each group on the pie:
  const pie = d3.pie<any>().value((d: any) => Number(d.Time));
  console.log(pie)
  // Build the pie chart
  this.svgpie
  .selectAll('pieces')
  .data(pie(this.data2))
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(this.radius)
  )
  .attr('fill', (d, i) => (this.colors(i)))
  .attr("stroke", "#121926")
  .style("stroke-width", "1px");

  // Add labels
  const labelLocation = d3.arc()
  .innerRadius(100)
  .outerRadius(this.radius);
  this.svgpie
  .selectAll('pieces')
  .data(pie(this.data2))
  .enter()
  .append('text')
  .text(d => d.data.Distance)
  .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("font-size", 15);
}

  // constructor() { }

  ngOnInit(): void {
    this.createSvg1();
    this.createSvgPie1();
    this.drawBars1(this.data);
    this.createColors1();
    this.drawChart1();
    this.load();
    const pas = this?.data?.map((x: any) => { return (parseInt(x.Pas))})
    this.sumPas = pas?.reduce((accumulator, currentValue) => { 
      return accumulator + currentValue
    })
    const distance = this?.data2?.map((x: any) => { return (parseInt(x.Distance.slice(0, 5)))})
    this.sumDis = distance?.reduce((accumulator, currentValue) => { 
      return accumulator + currentValue
    })

    const time = this?.data2?.map((x: any) => { return (parseInt(x.Time))})
    const sumDis = time?.reduce((accumulator, currentValue) => { 
      return accumulator + currentValue
    })
    const timeNoActivity: any = this?.data2?.map((x: any) => { 
      if(x.Distance === '0.000km') {
      return (
        parseInt(x.Time)
        )
    } else {
      return 0
    }
  })
    const timeNoActivityReduc = timeNoActivity?.reduce((accumulator, currentValue) => { 
      return accumulator + currentValue
    })
    const hourActivity = sumDis - timeNoActivityReduc
    const convHour = hourActivity / 60
    this.sumDay = Math.round(convHour)

    const calorie = this?.data2?.map((x: any) => { return (parseInt(x.Calorie))})
    this.sumCalorie = calorie?.reduce((accumulator, currentValue) => { 
      return accumulator + currentValue
    })

    const vitesse = this?.data2?.map((x: any) => { return (parseInt(x.Vitesse))})
    const sumVitesse = vitesse?.reduce((accumulator, currentValue) => { 
      return accumulator + currentValue
    })

    this.moyenVit = Math.round(sumVitesse / vitesse.length)

}

load(){
  this.loaded = false;

}
}