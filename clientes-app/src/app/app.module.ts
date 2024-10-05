import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { ClientesModule } from './clientes/clientes.module';
import { HttpClientModule  } from '@angular/common/http'
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { ClientesService } from './clientes.service';
import { ServicoPrestadoService } from './servico-prestado.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ServicoPrestadoModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    
  ],
  providers: [
    ClientesService,
    ServicoPrestadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
