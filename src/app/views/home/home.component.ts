import { HeaderData } from './../../components/template/header/header-data.model';
import { HeaderService } from './../../services/header.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService ) {
    headerService.headerData={
      title:'Inicio',
      icon:'home',
      routeUrl: ''
    }

  }

  ngOnInit(): void {
  }

}
