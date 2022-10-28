import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service';
import { POST } from './POST';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    posts:POST[] = []

    constructor(private servicio:DataService){
        this.servicio.getData().subscribe(data =>{
            //console.log(data)
            this.posts = data;
        })

    }
}
