import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Sale } from '../components/sale/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
baseUrl = 'http://localhost:3333/sales'
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })};

    read(): Observable<Sale[]> {
      return this.http.get<Sale[]>(this.baseUrl);
    }
}
