import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-img-cropper';
import { hostname } from '../app.const';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-candidate-profile-summary',
  templateUrl: './candidate-profile-summary.component.html',
  styleUrls: ['./candidate-profile-summary.component.css']
})
export class CandidateProfileSummaryComponent implements OnInit {

  title = 'CANDIDATE PROFILE SUMMARY';

  data: any;
  data1: any;

  ip = hostname + '/image?image=';


  cropperSettings1: CropperSettings;

  @ViewChild('cropper', undefined) cropper: ImageCropperComponent;
  croppedWidth: number;
  croppedHeight: number;

  constructor(
    private http: HttpClient
  ) {
    this.cropperSettings1 = new CropperSettings();
    this.cropperSettings1.width = 200;
    this.cropperSettings1.height = 250;

    this.cropperSettings1.croppedWidth = 200;
    this.cropperSettings1.croppedHeight = 250;

    this.cropperSettings1.canvasWidth = 500;
    this.cropperSettings1.canvasHeight = 300;

    this.cropperSettings1.minWidth = 100;
    this.cropperSettings1.minHeight = 100;

    this.cropperSettings1.rounded = false;

    this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

    this.data1 = {};
  }

  ngOnInit() {

    this.data = JSON.parse(localStorage.getItem("candidate-profile-summary"));
    // console.log(this.data);

  }

  getImage(imgName): Observable<any> {
    return this.http.get<any>(hostname + '/image?image=' + imgName);
  }

  cropped(bounds: Bounds) {
    //console.log(bounds);
  }

  fileChangeListener($event) {
    var image: any = new Image();
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);

    };

    myReader.readAsDataURL(file);
  }





}
