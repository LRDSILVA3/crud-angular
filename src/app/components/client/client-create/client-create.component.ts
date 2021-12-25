import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import{Router} from '@angular/router';
import { Observable } from 'rxjs';
import{Client} from './../client.model';
@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  client: Client= {
    cpf: '',
    dateNascim: '',
    name: '',
    cellNumber: ''
  }
  constructor(private clientService: ClientService,private router:Router) { }

  ngOnInit(): void {
  }
  createClient():void{
    this.clientService.create(this.client).subscribe(() =>{

      this.clientService.showMessage('Cliente Criado');
      this.router.navigate(['/client'])
    })
    }
    cancel():void{
      this.router.navigate(['/client'])
    }
    }


