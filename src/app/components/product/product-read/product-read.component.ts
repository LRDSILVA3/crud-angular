import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../../../services/product.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

 products!: Product[]
 displayedColumns = ['name','price','quantity','action'] //'id',
  constructor(private productService: ProductService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.productService.read().subscribe(products =>{
      setTimeout(() =>{
        this.spinner.hide();
        this.products = products
    }, 1300);
    })
  }

}
