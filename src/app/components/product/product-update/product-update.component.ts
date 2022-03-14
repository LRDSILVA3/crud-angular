import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product!: Product;
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,private snackBar: MatSnackBar) { }

    showMessage(msg: string, isError: boolean = false): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ['msg-error'] : ['msg-success']
      })};
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(product => {
      this.product = product;
    })
  }
  updateProduct(): void {
    if(!this.product.name || !this.product.price || !this.product.quantity){
      this.errorRegister();
    }else{
    this.productService.update(this.product).subscribe(() => {
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
