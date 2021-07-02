import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import * as d3 from 'd3';

@Component({
  selector: 'app-month',
  templateUrl: './month.page.html',
  styleUrls: ['./month.page.scss'],
})
export class MonthPage implements OnInit { 
    private sumPas: any;
    private sumDis: any;
    private sumDay: any;
    private sumCalorie: any;
    private moyenVit: any;
  private data = [
    {"Day": "Lundi", "Pas": "28000", "Released": "2021"},
    {"Day": "Mardi", "Pas": "25026", "Released": "2021"},
    {"Day": "Mercredi", "Pas": "22200", "Released": "2021"},
    {"Day": "Jeudi", "Pas": "21560", "Released": "2021"},
    {"Day": "Vendredi", "Pas": "21316", "Released": "2021"},
    {"Day": "Samedi", "Pas": "24049", "Released": "2021"},
    {"Day": "Dimanche", "Pas": "25659", "Released": "2021"},
  ];

  private data2 = [
    {"Semaine": "Première Semaine", "Time": "192", "Released": "2021", "Calorie": "2232", "Distance": "7.123", "Vitesse": "6"},
    {"Semaine": "Deuxième Semaine", "Time": "242", "Released": "2021", "Calorie": "2429", "Distance": "5.925", "Vitesse": "5"},
    {"Semaine": "Troisième Semaine", "Time": "210", "Released": "2021", "Calorie": "2132", "Distance": "6.823", "Vitesse": "8"},
    {"Semaine": "Quatrième Semaine", "Time": "222", "Released": "2021", "Calorie": "2311", "Distance": "7.463", "Vitesse": "6"},
  ];

  private svg;
  private margin = 60;
  private width = 350 - (this.margin * 2);
  private height = 370 - (this.margin * 2);

  private svgpie;
  private marginpie = 40;
  private widthpie = 380;
  private heightpie = 350;
  private radius = Math.min(this.widthpie, this.heightpie) / 2 - this.marginpie;
  private colors;

  private createSvg(): void {
    this.svg = d3.select("figure#barMonth")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
}

private drawBars(data: any[]): void {
  // Create the X-axis band scale
  const x = d3.scaleBand()
  .range([0, this.width])
  .domain(data.map(d => d.Day))
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
  .domain([20000, 29000])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", d => x(d.Day))
  .attr("y", d => y(d.Pas))
  .attr("width", x.bandwidth())
  .attr("height", (d) => this.height - y(d.Pas))
  .attr("fill", "#fff");
}

private createColors(): void {
  this.colors = d3.scaleOrdinal()
  .domain(this.data.map(d => d.Pas.toString()))
  .range(["#B0C4DE", "#ADD8E6", "#87CEFA", "#1E90FF"]);
}

private createSvgPie(): void {
  this.svgpie = d3.select("figure#pieMonth")
  .append("svg")
  .attr("width", this.widthpie)
  .attr("height", this.heightpie)
  .append("g")
  .attr(
    "transform",
    "translate(" + this.widthpie / 2 + "," + this.heightpie / 2 + ")"
  );
}

private drawChart(): void {
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
  .text(d => d.data.Semaine)
  .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("font-size", 15);
}

  // constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.createSvgPie();
    this.drawBars(this.data);
    this.createColors();
    this.drawChart();

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

}