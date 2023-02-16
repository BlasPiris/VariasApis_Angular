import { Injectable } from '@angular/core';
//IMPORTAR AL SERVICIO
import{HttpClient,HttpHeaders} from '@angular/common/http'
import{Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  public gifEndpoint:string;
  public stickersEndpoint:string;
  public apiKey:string;
 

  constructor(public http:HttpClient) { 
    this.gifEndpoint="http://api.giphy.com/v1/gifs/search";
    this.stickersEndpoint="http://api.giphy.com/v1/stickers/search";
    this.apiKey="&api_key=PAxU91CvK6u9tLenxt1kZQ5QQI78wQo3";
  }

  getGif(busqueda:string):Observable<any>{
    return this.http.get(this.gifEndpoint+"?q="+busqueda+this.apiKey)
  }

  getSticker(busqueda:string):Observable<any>{
    return this.http.get(this.stickersEndpoint+"?q="+busqueda+this.apiKey)
  }
}
