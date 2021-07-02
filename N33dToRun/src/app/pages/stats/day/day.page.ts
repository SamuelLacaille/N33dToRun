import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Chart } from 'chart.js';
import * as d3 from 'd3';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit { 
  private data = [
    {"Framework": "8:00", "Stars": "0", "Released": "2014"},
    {"Framework": "10:00", "Stars": "12", "Released": "2013"},
    {"Framework": "12:00", "Stars": "4", "Released": "2016"},
    {"Framework": "14:00", "Stars": "2", "Released": "2010"},
    {"Framework": "16:00", "Stars": "2", "Released": "2011"},
    {"Framework": "18:00", "Stars": "6", "Released": "2011"},
  ];

  private data2 = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];

  private svg;
  private margin = 50;
  private width = 350 - (this.margin * 2);
  private height = 350 - (this.margin * 2);

  private svgpie;
  private marginpie = 0;
  private widthpie = 350;
  private heightpie = 200;
  private radius = Math.min(this.widthpie, this.heightpie) / 2 - this.marginpie;
  private colors;

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
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
  .domain(data.map(d => d.Framework))
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
  .domain([0, 15])
  .range([this.height, 0]);

  // Draw the Y-axis on the DOM
  this.svg.append("g")
  .call(d3.axisLeft(y));

  // Create and fill the bars
  this.svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", d => x(d.Framework))
  .attr("y", d => y(d.Stars))
  .attr("width", x.bandwidth())
  .attr("height", (d) => this.height - y(d.Stars))
  .attr("fill", "#d04a35");
}

private createColors(): void {
  this.colors = d3.scaleOrdinal()
  .domain(this.data.map(d => d.Stars.toString()))
  .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
}


private drawChart(): void {
  // Compute the position of each group on the pie:
  const pie = d3.pie<any>().value((d: any) => Number(d.Stars));

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
  .text(d => d.data.Framework)
  .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("font-size", 15);
}

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
    this.createColors();
    this.drawChart();
}

}