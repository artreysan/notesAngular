import { Injectable } from '@angular/core';
//Importamos http
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log('service is working!!');
  }
  getData(){

  }
}
