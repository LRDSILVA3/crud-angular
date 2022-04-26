import { Component, OnInit } from '@angular/core';
import { ClientService } from './../../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from './../client.model';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {
  client!: Client;
  constructor(private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,private spinner:NgxSpinnerService) { }



   async ngOnInit(): Promise<void> {
    this.spinner.show();
      const id = this.route.snapshot.paramMap.get('id');
      await this.clientService.readById(id!).subscribe(client => {
        setTimeout(() =>{
          this.spinner.hide();
          this.client = client;
      }, 800);
      })}


      async deleteProduct(): Promise<void> {
        await this.clientService.delete(this.client.id).subscribe(() => {
          this.clientService.showMessage('Cliente excluido com sucesso');
          this.router.navigate(['/client']);
        })
      }
      cancel(): void {
        this.router.navigate(['/client']);
      }
}

