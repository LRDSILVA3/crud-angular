import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product.model';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product!: Product;
  constructor(private productService: ProductService,
    private spinner:NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.spinner.show();

    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product => {
      setTimeout(() =>{
        this.spinner.hide();

        this.product = product;
      }, 800);
    })
  }
  deleteProduct(): void {
    this.productService.delete(this.product.id!).subscribe(() => {
      this.productService.showMessage('Produto excluido com sucesso');
      this.router.navigate(['/products']);
    })
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }

}
