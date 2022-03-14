import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { format, parseISO } from 'date-fns';
import { NgxSpinnerService } from 'ngx-spinner';
import { SaleService } from 'src/app/services/sale.service';
import {Sale} from '../sale.model';
@Component({
  selector: 'app-sale-read',
  templateUrl: './sale-read.component.html',
  styleUrls: ['./sale-read.component.css']
})
export class SaleReadComponent implements OnInit {

  constructor(private saleService: SaleService,private spinner:NgxSpinnerService) { }
  sales!: Sale[];
  displayedColumns = ['id_client', 'id_sales_products', 'created_at', 'total_value'];
  dataSource = new MatTableDataSource<Sale>(this.sales);
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [1,2,5,10];

  ngOnInit(): void {
    this.spinner.show();

    this.saleService.read().subscribe(sales =>{
      this.sales = sales;

      setTimeout(() =>{
        this.spinner.hide();
      this.dataSource = new MatTableDataSource<Sale>(this.sales);
      this.length = this.dataSource.data.length;
    }, 800);
    });
  }

}
