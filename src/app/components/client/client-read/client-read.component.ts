import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../../../services/client.service';
import {MatTableDataSource} from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})

export class ClientReadComponent implements OnInit{
  constructor(private clientService: ClientService,private spinner:NgxSpinnerService) { }
  clients!: Client[];
  displayedColumns = ['name','cpf','dateNascim','cellNumber','action']; //'id',
  dataSource = new MatTableDataSource<Client>(this.clients);
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [1, 2, 10, 100];


   async ngOnInit() : Promise<void> {
    this.spinner.show();

    await this.clientService.read().subscribe(clients =>{
    this.clients = clients

    setTimeout(() =>{
    this.spinner.hide();

    this.dataSource = new MatTableDataSource<Client>(this.clients);
    this.length = this.dataSource.data.length;
    }, 800);

    })
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }

  }  }
