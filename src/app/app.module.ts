import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';

import { HeaderModule } from './core/header/header.module';
import { FooterModule } from './core/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    HeaderModule, // Importe o HeaderModule
    FooterModule  // Importe o FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
