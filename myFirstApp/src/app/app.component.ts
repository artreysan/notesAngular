import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    users = ['Joe','Ana','Milly','Suzan'];


    //Buenas practicas
    name: string = 'Ray Ray';
    age:number | undefined;
    address: {
        street: string;
        city: string;
    } | undefined;
    hobbies: string[] | undefined;

    constructor(){
        this.age = 28;

        this.address = {
            street: '2218 Baker Street',
            city: 'London'
        }
        this.hobbies = ['swimming','read', 'write']
    }
}
