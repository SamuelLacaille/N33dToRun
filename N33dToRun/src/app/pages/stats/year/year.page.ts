import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import * as d3 from 'd3';

@Component({
  selector: 'app-year',
  templateUrl: './year.page.html',
  styleUrls: ['./year.page.scss'],
})
export class YearPage implements OnInit { 

  private data = [
    {"Month": "Janvier", "Pas": "2372802", "Released": "2021", "Time": "4"},
    {"Month": "Février", "Pas": "2372362", "Released": "2021", "Time": "3"},
    {"Month": "Mars", "Pas": "2382123", "Released": "2021", "Time": "10"},
    {"Month": "Avril", "Pas": "2373205", "Released": "2021", "Time": "7"},
    {"Month": "Mai", "Pas": "2372856", "Released": "2021", "Time": "6"},
    {"Month": "Juin", "Pas": "2371989", "Released": "2021", "Time": "9"},
    {"Month": "Juillet", "Pas": "2362621", "Released": "2021", "Time": "11"},
    {"Month": "Aout", "Pas": "2372009", "Released": "2021", "Time": "12"},
    {"Month": "Septembre", "Pas": "2372043", "Released": "2021", "Time": "7"},
    {"Month": "Octobre", "Pas": "2371299", "Released": "2021", "Time": "5"},
    {"Month": "Novembre", "Pas": "2372728", "Released": "2021", "Time": "4"},
    {"Month": "Décembre", "Pas": "2372796", "Released": "2021", "Time": "3"},
  ];

//   private data = [
//     {"Month": "Janvier", "Released": "2021"},
//     {"Month": "Février", "Released": "2021"},
//     {"Month": "Mars", "Released": "2021"},
//     {"Month": "Avril", "Released": "2021"},
//     {"Month": "Mai", "Released": "2021"},
//     {"Month": "Juin", "Released": "2021"},
//     {"Month": "Juillet", "Released": "2021"},
//     {"Month": "Aout", "Released": "2021"},
//     {"Month": "Septembre", "Released": "2021"},
//     {"Month": "Octobre", "Released": "2021"},
//     {"Month": "Novembre", "Released": "2021"},
//     {"Month": "Décembre", "Released": "2021"},
//   ];

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

  private createSvg(): void {
    this.svg = d3.select("figure#barYear")
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
  .domain(data.map(d => d.Month))
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
  .domain([0, 31])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", d => x(d.Month))
  .attr("y", d => y(d.Time))
  .attr("width", x.bandwidth())
  .attr("height", (d) => this.height - y(d.Time))
  .attr("fill", "#2dd36f");
}

private createColors(): void {
  this.colors = d3.scaleOrdinal()
  .domain(this.data.map(d => d.Time.toString()))
  .range(["#75151e", "#884da7", "#79f8f8", "#cee4e6", "#01d758", "#D3D3D3", "#e0115f", "#90997a", "#909cd8", "#a9a6c4", "#777f2d", "#faea73"]);
}

private createSvgPie(): void {
  this.svgpie = d3.select("figure#pieYear")
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
  const pie = d3.pie<any>().value((d: any) => Number(d.Pas));
  console.log(pie)
  // Build the pie chart
  this.svgpie
  .selectAll('pieces')
  .data(pie(this.data))
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
  .data(pie(this.data))
  .enter()
  .append('text')
  .text(d => d.data.Month + ' / ' + d.data.Pas + ' pas')
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
    
}

}