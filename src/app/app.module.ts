import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Componenets/products/products.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FilterPipe } from './Pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './Pipe/sort.pipe';
import { ReversePipe } from './Pipe/reverse.pipe';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HighlightDirective,
    FilterPipe,
    SortPipe,
    ReversePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
