import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }
  private data = [
    {"cuentaid": 1, "monto": 200, "tipo": "efectivo", "fecha": "2021-09-09" },
    {"cuentaid": 2, "monto": 3000, "tipo": "ahorro", "fecha": "2013-09-09"},
    {"cuentaid": 3, "monto": 45, "tipo": "tDebito", "fecha": "2018-09-09"},
    {"cuentaid": 4, "monto": 700, "tipo": "tCredito", "fecha": "2017-09-09"}
  ];
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

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
    .domain(data.map(d => d.tipo))
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
    .domain([0, 4000])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.tipo))
    .attr("y", d => y(d.monto))
    .attr("width", x.bandwidth())
    .attr("height", (d) => this.height - y(d.monto))
    .attr("fill", "#d04a35");
  }
  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
    //d3.json('http://localhost:4000/api/cliente').then(data => this.drawBars(data));
  }

}
