import { Component, OnInit } from '@angular/core';
import {GiphyService} from '../../services/giphy-service.service'

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css'],
  providers: [GiphyService],
})
export class GiphyComponent implements OnInit {

  busqueda:string;
  photos:Array<any>[];

  constructor(public datos_Service:GiphyService) { }

  ngOnInit(): void {
  }

  getGif(){

    this.datos_Service.getGif(this.busqueda).subscribe(result=>{
      this.photos=result.data
      console.log(this.photos)
    })
  }

  getSticker(){
    this.datos_Service.getSticker(this.busqueda).subscribe(result=>{
      this.photos=result.data
      console.log(this.photos)
    })
  }

}
