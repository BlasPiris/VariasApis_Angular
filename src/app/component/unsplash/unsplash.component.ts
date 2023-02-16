import { Component, OnInit } from '@angular/core';
import {UnsplashService} from '../../services/unsplash-service.service'

@Component({
  selector: 'app-unsplash',
  templateUrl: './unsplash.component.html',
  styleUrls: ['./unsplash.component.css'],
  providers: [UnsplashService],
})
export class UnsplashComponent implements OnInit {

  busqueda:string;
  photos:Array<any>[]

  constructor(public datos_Service:UnsplashService) {

   }

  ngOnInit(): void {
  }

  buscar(){
    this.datos_Service.getPhotos(this.busqueda).subscribe(result=>{
     this.photos=result.results;
     console.log(this.photos)
    });
  }

}
