import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import{MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import{HttpClientModule} from '@angular/common/http';
import{MatFormFieldModule}from '@angular/material/form-field';
import {MatInputModule}from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ClientReadComponent } from './components/client/client-read/client-read.component';
import {MatTableModule }from '@angular/material/table'
import localePT from '@angular/common/locales/pt';
import {registerLocaleData} from'@angular/common';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import {NgxMaskModule} from 'ngx-mask';
import { SalesComponent } from './views/sales/sales.component';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SaleReadComponent } from './components/sale/sale-read/sale-read.component';
import { LineChartComponent } from './views/line-chart/line-chart.component';
import { SaleCreateModule } from './components/sale/sale-create/sale-create.module';

registerLocaleData(localePT)
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ClientCreateComponent,
    ClientReadComponent,
    ClientCrudComponent,
    ClientDeleteComponent,
    ClientUpdateComponent,
    SalesComponent,
    SaleReadComponent,
    LineChartComponent,
  ],
  imports: [
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    NgxSpinnerModule,
    NgChartsModule,
    SaleCreateModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters:false //Ao salvar, mantera a mascara
    }),
    ReactiveFormsModule
  ],

  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


