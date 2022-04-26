import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OptionsSelect } from 'src/app/class/options';
import { ClientService } from 'src/app/services/client.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { ProductService } from 'src/app/services/product.service';
import { Product, ProductOrder } from '../../product/product.model';

@Component({
  selector: 'app-sale-create',
  templateUrl: './sale-create.component.html',
  styleUrls: ['./sale-create.component.css']
})
export class SaleCreateComponent implements OnInit {
  constructor(private clientService: ClientService,private productService: ProductService) { }
  pedido: ProductOrder[] = [];

  disponiveis: ProductOrder[] = [];

  selectClient: OptionsSelect[] = [];
  clientControl = new FormControl();


  ngOnInit(): void {
    this.requestClients();
    this.requestProducts();
  }

  async requestClients(){
    await this.clientService.read().subscribe(clients =>{
      clients.map((client => {
        this.selectClient.push({value:client?.id, label:client?.name})
      }));
  });
}
  async requestProducts(){
    await this.productService.read().subscribe(products =>{
       products.map(product => {
        this.disponiveis.push({
          ...product,
          quantityOrder: 1,
          totalPrice: product.price

        });
       })

  })
}

async drop(event: CdkDragDrop<string[] | any>) {
  if (event.previousContainer === event.container) {
    //Se não mover certo
    let data:ProductOrder = event.container.data[0];

    data.quantityOrder = 1;
    data.totalPrice = (parseFloat(data.price) * data.quantityOrder).toFixed(2);

    event.container.data[0] = data;

    await moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    console.log(this.disponiveis,this.pedido);
  } else {
    //Se mover com sucesso
    let data:ProductOrder = event.previousContainer.data[0];

    data.quantityOrder = 1;
    data.totalPrice = (parseFloat(data.price) * data.quantityOrder).toFixed(2);

    event.previousContainer.data[0] = data;

    await transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex,
    );
  }
}
quantityOrder(event: ProductOrder, functionQuantity: string){
  if(functionQuantity === 'more'){
    event.quantityOrder = event.quantityOrder + 1;
    event.totalPrice = (parseFloat(event.price) * event.quantityOrder).toFixed(2);

  }else{
    if(event.quantityOrder > 1){
    event.quantityOrder = event.quantityOrder - 1;
    event.totalPrice = (parseFloat(event.price) * event.quantityOrder).toFixed(2);
    }
  }
}

}
