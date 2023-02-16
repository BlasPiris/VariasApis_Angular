import { Injectable } from '@angular/core';
//IMPORTAR AL SERVICIO
import{HttpClient,HttpHeaders} from '@angular/common/http'
import{Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  public endpoint:string;
  public apiKey:string;
 

  constructor(public http:HttpClient) { 
    this.endpoint="https://api.unsplash.com/search/collections";
    this.apiKey="&client_id=4d55d030643771567ce339f9640fd38fef50ab402a0fb1e8174db79d786141a7";
  }

  getPhotos(busqueda:string):Observable<any>{
    return this.http.get(this.endpoint+"?query="+busqueda+this.apiKey)
  }
}