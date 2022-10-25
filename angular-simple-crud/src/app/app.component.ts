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

  selectedEmployee: Employee = new Employee();

  openForEdit(employee:Employee){
    this.selectedEmployee = employee;
  }
  addOrEdit(){
    if(this.selectedEmployee.id === 0){
      //Change ID
      this.selectedEmployee.id = this.employeeArray.length + 1;
      //Save
      this.employeeArray.push(this.selectedEmployee);
    }

    this.selectedEmployee = new Employee();
  }

  delete(){
    if(confirm('Are you sure do you want to delete it?'))
    {
        this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
        this.selectedEmployee = new Employee();
    }
  }

}
