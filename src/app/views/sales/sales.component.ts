import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderData } from './../../components/template/header/header-data.model';
import { HeaderService } from './../../services/header.service';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {


  constructor(private headerService: HeaderService,private router:Router ) {
    headerService.headerData={
      title:'Vendas',
      icon:'paid',
      routeUrl: ''
    }
  }




ngOnInit(): void {
}
navigateToSaleCreate(){
  this.router.navigate(['/sales/create'])
}

}
