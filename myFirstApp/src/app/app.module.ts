import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importamos componentes para usar ngModel en archivo app.component.html
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorld } from './primercomponente/primer.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
//Importamos la clase de nuestro archivo
import {HttpClientModule} from '@angular/common/http'
import {DataService} from './data.service'

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    HolaMundoComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    //Importamos HTTP
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
