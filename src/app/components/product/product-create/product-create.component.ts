import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import{Router} from '@angular/router';
import { Observable, EMPTY} from 'rxjs';
import{Product} from './../product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

public productForm: FormGroup = new FormGroup({
  name: new FormControl('',[Validators.required]),
  price: new FormControl('',[Validators.required]),
  quantity: new FormControl('',[Validators.required]),

});
  constructor(private productService: ProductService,private router:Router,private snackBar: MatSnackBar,public form: FormBuilder) { }
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })};
  ngOnInit(): void {

  }
async createProduct(){
  if(!this.productForm.value.name || !this.productForm.value.price || !this.productForm.value.quantity){
this.errorRegister();
return;
}else{
  await this.productService.create(this.productForm.value).subscribe(() =>{

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
