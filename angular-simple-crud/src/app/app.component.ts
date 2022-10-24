import { Component } from '@angular/core';
import {Employee} from './models/employee'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //Instanciar Objetos
  employeeArray: Employee[] = [
    {id:1, name: "Ryan", country:"Ukranie"},
    {id:2, name: "Lili", country:"Mex"},
    {id:3, name: "Joe", country:"US"}
  ];



}
