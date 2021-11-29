import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../components/template/header/header.service';
import {Router} from'@angular/router';

@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {
  constructor(private router:Router, private headerService: HeaderService) {
    headerService.headerData={
      title:'Cadastro de Clientes',
      icon:'account_circle',
      routeUrl: '/client'
    }

  }
  ngOnInit() {
  }
  navigateToClientCreate():void{
    this.router.navigate(['/client/create'])
  }

}
