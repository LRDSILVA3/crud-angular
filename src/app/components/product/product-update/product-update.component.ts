import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product!: Product;
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,private snackBar: MatSnackBar,private spinner:NgxSpinnerService) { }

    showMessage(msg: string, isError: boolean = false): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ['msg-error'] : ['msg-success']
      })};
  ngOnInit(): void {
    this.spinner.show();
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(product => {
      setTimeout(() =>{
        this.spinner.hide();
        this.product = product;
    }, 800);

    })
  }
  async updateProduct(): Promise<void> {
    if(!this.product.name || !this.product.price || !this.product.quantity){
      this.errorRegister();
    }else{
    await this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso')
      this.router.navigate(['/products']);
    })
  }
}
  cancel(): void {
    this.router.navigate(['/products']);
  }
  errorRegister():Observable<any>{
    this.showMessage('Verifique as informações cadastradas!', true);
    return EMPTY;
  }
}
