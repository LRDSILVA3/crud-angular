import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { format, parseISO } from 'date-fns';
import { SaleService } from 'src/app/services/sale.service';
import {Sale} from '../sale.model';
@Component({
  selector: 'app-sale-read',
  templateUrl: './sale-read.component.html',
  styleUrls: ['./sale-read.component.css']
})
export class SaleReadComponent implements OnInit {

  constructor(private saleService: SaleService) { }
  sales!: Sale[];
  displayedColumns = ['id_client', 'id_sales_products', 'created_at', 'total_value'];
  dataSource = new MatTableDataSource<Sale>(this.sales);
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [1,2,5,10];

  ngOnInit(): void {
    this.saleService.read().subscribe(sales =>{
      this.sales = sales;
      console.log(sales)

      this.dataSource = new MatTableDataSource<Sale>(this.sales);
      this.length = this.dataSource.data.length;
    });
  }

}
