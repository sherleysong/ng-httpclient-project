import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { dataHttpService } from './service/data-http.service';

import { ProductComponent } from './pages/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    dataHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
