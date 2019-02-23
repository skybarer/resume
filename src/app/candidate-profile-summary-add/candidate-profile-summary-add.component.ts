import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { CandidateProfileSummaryAddService } from './candidate-profile-summary-add.service';
import { CropperSettings, ImageCropperComponent, Bounds } from 'ng2-img-cropper';

@Component({
  selector: 'app-candidate-profile-summary-add',
  templateUrl: './candidate-profile-summary-add.component.html',
  styleUrls: ['./candidate-profile-summary-add.component.css']
})
export class CandidateProfileSummaryAddComponent implements OnInit {



  title = 'PROFILE SUMMARY ADD';
  rf: FormGroup;
  submitted = false;
  candidateDetails: any;
  candidateDetailsSummary: any;
  data1: any;
  cropperSettings1: CropperSettings;
  fileName:string;

  @ViewChild('cropper', undefined) cropper: ImageCropperComponent;
  croppedWidth: number;
  croppedHeight: number;
  onChange: ($event: any) => ($event: any) => void;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private notifier: NotifierService,
    private profileService: CandidateProfileSummaryAddService
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
    
    // this.onChange = ($event:any) =>($event)=> {
    //   var image: any = new Image();
    //   var file: File = $event.target.files[0];
    //   this.fileName = $event.target.files[0].name;
    //   var myReader: FileReader = new FileReader();
    //   var that = this;
    //   myReader.onloadend = function (loadEvent: any) {
    //     image.src = loadEvent.target.result;
    //     that.cropper.setImage(image);
  
    //   };
  
    //   myReader.readAsDataURL(file);
    // }

   
  }

  ngOnInit() {

   
    

    this.rf = this.formBuilder.group({
      candidateName: ['', [Validators.required]],
      designation: ['', [Validators.required]],

      experienceLine1: ['', [Validators.required]],
      experienceLine2: ['', [Validators.required]],
      experienceLine3: ['', [Validators.required]],
      experienceLine4: ['', [Validators.required]],

      highlightsLine1: ['', [Validators.required]],
      highlightsLine2: ['', [Validators.required]],
      highlightsLine3: ['', [Validators.required]],
      highlightsLine4: ['', [Validators.required]],

      profileDescription: ['', [Validators.required]],

      profileLine1: ['', [Validators.required]],
      profileLine2: ['', [Validators.required]],
      profileLine3: ['', [Validators.required]],
      profileLine4: ['', [Validators.required]],

      // skills: ['', [Validators.required]],
      candidateId: ['']

    });


    if (localStorage.getItem('candidate-profile-summary-add')) {
      this.candidateDetails = JSON.parse(localStorage.getItem('candidate-profile-summary-add'));
      // this.candidateDetailsSummary = JSON.parse(localStorage.getItem('candidate-profile-summary'));
      this.profileService.profileDetails( this.candidateDetails.id).subscribe(
        response =>{
          this.candidateDetailsSummary = response.message;
          // console.log( this.candidateDetailsSummary);

          this.rf.patchValue(
            {
              'candidateId': this.candidateDetails.id,
              'candidateName': this.candidateDetails.name,
              'designation': this.candidateDetails.designation,
      
              'experienceLine1': this.candidateDetailsSummary.experienceLine1,
              'experienceLine2': this.candidateDetailsSummary.experienceLine2,
              'experienceLine3': this.candidateDetailsSummary.experienceLine3,
              'experienceLine4': this.candidateDetailsSummary.experienceLine4,
      
              'highlightsLine1': this.candidateDetailsSummary.highlightsLine1,
              'highlightsLine2': this.candidateDetailsSummary.highlightsLine2,
              'highlightsLine3': this.candidateDetailsSummary.highlightsLine3,
              'highlightsLine4': this.candidateDetailsSummary.highlightsLine4,
              'id': 0,
              'profileDescription': this.candidateDetailsSummary.profileDescription,
              'profileLine1': this.candidateDetailsSummary.profileLine1,
              'profileLine2': this.candidateDetailsSummary.profileLine2,
              'profileLine3': this.candidateDetailsSummary.profileLine3,
              'profileLine4': this.candidateDetailsSummary.profileLine4,
              'skills': this.candidateDetailsSummary.skills
            }
          );
        }
      )
    }





   

  }

  cropped(bounds: Bounds) {
    console.log(bounds);
  }



  // convenience getter for easy access to form fields
  get f() { return this.rf.controls; }

  dataURItoBlob(dataURI) {
    if(dataURI != null){
      var binary = atob(dataURI.split(',')[1]);
      var array = [];
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], {
        type: 'image/jpg'
      });
    }
   
  }

  

  onSubmit() {

    console.log(this.fileName);

    // console.log(this.rf.value);


    this.submitted = true;
    let formData = new FormData();
    formData.append('photo', this.dataURItoBlob(this.data1.image),this.fileName);
    formData.append('profile', JSON.stringify(this.rf.value));

    // stop here if form is invalidx
    if (this.rf.invalid) {
      // alert('some where went wrong.');
      return
    }

    this.profileService.insertProfileSummaryDetails(formData)
      .subscribe(response => {
        console.log(response);
        this.notifier.notify('success', response.message);
      });

  }

  onReset() {
    // alert('reset is clicked');
    // this.rf.reset(this.rf.value); 
    return this.rf.reset('');
  }
}
