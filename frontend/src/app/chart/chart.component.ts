import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass'],
})
export class ChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('data') lineChartData: ChartDataSets[] = [];

  @Input('labels') lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
      // backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
}
