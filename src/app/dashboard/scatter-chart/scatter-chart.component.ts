import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent implements OnInit {

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

    this.svg = d3.select("figure#scatter")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }
  private drawPlot(): void {
    // Add X axis
    const x = d3.scaleLinear()
    .domain([2011, 2021])
    .range([ 0, this.width ]);
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([0, 4000])
    .range([ this.height, 0]);
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Add dots
    const dots = this.svg.append('g');
    dots.selectAll("dot")
    .data(this.data)
    .enter()
    .append("circle")
    .attr("cx", d => x((d.fecha).slice(0,4)))
    .attr("cy", d => y(d.monto))
    .attr("r", 7)
    .style("opacity", .5)
    .style("fill", "#69b3a2");

    // Add labels
    dots.selectAll("text")
    .data(this.data)
    .enter()
    .append("text")
    .text(d => d.cuentaid)
    .attr("x", d => x((d.fecha).slice(0,4)))
    .attr("y", d => y(d.monto))
  }
  ngOnInit(): void {
    this.createSvg();
     //comentar esta linea
     this.drawPlot();

     d3.json('http://localhost:4000/api/cuenta').then(data => this.drawPlot());
  }

}
