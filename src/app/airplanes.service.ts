import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { airplane } from "./airplane";
 

@Injectable({
  providedIn: 'root'
})
export class airplanesService {


  private readonly API = 'http://localhost:3000/airplane';

  //private readonly API2 = 'http://localhost:5000';

  constructor(private http:HttpClient) { 

  }


   list(){
     console.log(this.http.get<airplane>(this.API));
        return this.http.get<airplane>(this.API);

   }

   create(airplane){
     return this.http.post(this.API,airplane).pipe();

   }

   remove(id){
    return this.http.delete(`${this.API}${id}`).pipe();
  }
}
