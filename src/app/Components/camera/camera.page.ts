import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from 'src/app/services/foto-service.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor(public fotoservice: FotoServiceService) {
    
  }

  ngOnInit() {
  }

  tomarFoto(){
    console.log("Click");
    this.fotoservice.addNewToGallery();
  }

}
