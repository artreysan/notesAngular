import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    users: string[] = ['Joe','Ana','Milly','Suzan'];

    deleteUser(u: string){
        for(let i = 0; i<this.users.length;i++){
            if(u == this.users[i]){
                this.users.splice(i,1);
            }
        }
    }

    addUser(){

        return false;
    }
}
