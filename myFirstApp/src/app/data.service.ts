import { Injectable } from '@angular/core';
//Importamos http
import { HttpClient } from '@angular/common/http';
//Iportamos nuestra interfaz que creamos
import { POST } from './POST';

@Injectable({
    providedIn: 'root',
})
export class DataService {

    constructor(private http: HttpClient) {
        console.log('service is working!!');
    }

    getData() {
        //Data from JSONPlaceHolder
        return this.http.get<POST[]>('https://jsonplaceholder.typicode.com/posts');
    }
}
