import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import{Router} from '@angular/router';
import { Observable, EMPTY} from 'rxjs';
import{Product} from './../product.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
product: Product= {
  name:'',
  price: ''
}
  constructor(private productService: ProductService,private router:Router,private snackBar: MatSnackBar) { }
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })};
  ngOnInit(): void {

  }
createProduct():void{
  if((this.product.name == "") || (this.product.price == "")){

this.errorRegister();
}else{
  this.productService.create(this.product).subscribe(() =>{

    this.productService.showMessage('Produto Criado');
    this.router.navigate(['/products'])
  })
}}
cancel():void{
  this.router.navigate(['/products'])
}

errorRegister():Observable<any>{
  this.showMessage('Verifique as informações cadastradas!', true);
  return EMPTY;
}
}
