import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSelectComponent } from './custom-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [CustomSelectComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatSelectModule]
})
export class CustomSelectModule { }
