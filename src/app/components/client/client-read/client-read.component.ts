import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../../../services/client.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})

export class ClientReadComponent implements OnInit{
  constructor(private clientService: ClientService,) { }
  clients!: Client[];
  displayedColumns = ['name','cpf','dateNascim','cellNumber','action']; //'id',
  dataSource = new MatTableDataSource<Client>(this.clients);
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [1, 2, 10, 100];


   ngOnInit() : void {
    this.clientService.read().subscribe(clients =>{
      this.clients = clients
      this.dataSource = new MatTableDataSource<Client>(this.clients);
      this.length = this.dataSource.data.length;
    })
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }

  }  }
