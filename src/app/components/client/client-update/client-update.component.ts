import { ClientService } from './../../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from './../client.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {
  client!: Client;
  constructor(private clientService: ClientService,
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
    this.clientService.readById(id!).subscribe(client => {
      this.client = client;
    })
  }
  updateClient(): void {
    if(!this.client.name|| !this.client.cpf || !this.client.dataNasc || !this.client.phoneNumber)
    {
      this.errorRegister();
    }else{
      this.clientService.update(this.client).subscribe(() => {
        this.clientService.showMessage('Cliente atualizado com sucesso')
        this.router.navigate(['/client']);
      })
    }

  }
  cancel(): void {
    this.router.navigate(['/client']);
  }

  errorRegister():Observable<any>{
    this.showMessage('Verifique as informações cadastradas!', true);
    return EMPTY;
  }

}
