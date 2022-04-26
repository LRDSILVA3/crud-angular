import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleCreateComponent } from './sale-create.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [SaleCreateComponent],
  imports: [
  CommonModule,MatCardModule,MatSelectModule,MatFormFieldModule,
   MatOptionModule, MatTableModule,DragDropModule
  ],
})
export class SaleCreateModule { }
