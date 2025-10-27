import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { WhiskeyService } from '../../services/whiskey.service';
import { CommonModule } from '@angular/common'
import{createChart, IChartApi} from 'lightweight-charts'

@Component({
  selector: 'app-whiskey-price-chart',
  imports: [],
  templateUrl: './whiskey-price-chart.component.html',
  styleUrl: './whiskey-price-chart.component.css'
})
export class WhiskeyPriceChartComponent implements OnInit {

  @ViewChild("chartContainer", { static: true}) chartContainer!: ElementRef;

  chart: IChartApi | null = null;

  constructor(private whiskeyService: WhiskeyService) { }

  ngOnInit()  {
    console.log("component loaded");
    
  }

}
