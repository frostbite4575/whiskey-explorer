import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { WhiskeyService } from '../../services/whiskey.service';
import { CommonModule } from '@angular/common'
import{createChart, IChartApi} from 'lightweight-charts'

@Component({
  selector: 'app-whiskey-price-chart',
  imports: [],
  templateUrl: './whiskey-price-chart.component.html',
  styleUrl: './whiskey-price-chart.component.css'
})
export class WhiskeyPriceChartComponent implements OnInit, AfterViewInit{

  @ViewChild("chartContainer", { static: true}) chartContainer!: ElementRef;

  chart: IChartApi | null = null;

  constructor(private whiskeyService: WhiskeyService) { }

  ngOnInit()  {
    console.log("component loaded");
  }
    
  ngAfterViewInit() {
    
  
  this.chart = createChart(this.chartContainer.nativeElement, {
    width: 800,
    height: 400,
    layout: {
     
      textColor: 'rgba(255, 255, 255, 0.9)'
    },
    grid: {
      vertLines: {
        color: 'rgba(197, 203, 206, 0.5)'
      },
      horzLines: {
        color: 'rgba(197, 203, 206, 0.5)'
      }
    },
   
    rightPriceScale: {
      borderColor: 'rgba(197, 203, 206, 0.8)'
}
  });
}
}


