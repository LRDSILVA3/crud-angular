import { Component, OnInit } from '@angular/core';
import { HeaderData } from './../../components/template/header/header-data.model';
import { HeaderService } from './../../services/header.service';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {


  constructor(private headerService: HeaderService ) {
    headerService.headerData={
      title:'Vendas',
      icon:'paid',
      routeUrl: ''
    }
  }




ngOnInit(): void {
}

}
