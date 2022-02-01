import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import{Router} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import{Client} from './../client.model';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  clientForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    cpf: new FormControl(''),
    dataNasc: new FormControl(''),
    phoneNumber: new FormControl(''),
  })
  constructor(private clientService: ClientService,private router:Router,private snackBar: MatSnackBar) { }
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })};
  ngOnInit(): void {
  }
  createClient():void{
    if(!this.clientForm.value.name || !this.clientForm.value.cpf ||
     !this.clientForm.value.phoneNumber && this.clientForm.value.dateNasc != 'dd/mm/aaaa'){
    this.errorRegister();
    return;
    }else{
    this.clientService.create(this.clientForm.value).subscribe(() =>{
      this.clientService.showMessage('Cliente Criado');
      this.router.navigate(['/client'])

    })
    }
  }
    cancel():void{
      this.router.navigate(['/client'])
    }
    errorRegister():Observable<any>{
      this.showMessage('Verifique as informações cadastradas!', true);
      return EMPTY;
    }
    }


