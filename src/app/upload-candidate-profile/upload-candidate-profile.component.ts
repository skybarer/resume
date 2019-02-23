import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadCandidateProfileService } from './upload-candidate-profile.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-upload-candidate-profile',
  templateUrl: './upload-candidate-profile.component.html',
  styleUrls: ['./upload-candidate-profile.component.css']
})
export class UploadCandidateProfileComponent implements OnInit {

  title = 'Candidate profile Upload';
  fu: FormGroup;
  data: any;
  fileToUpload: File = null;

  constructor(private formBuilder: FormBuilder, private fileUpload: UploadCandidateProfileService) {
    // Get saved data from SESSIONSTORAGE
    this.data = localStorage.getItem('upload-candidate-profile');
    //parsing json string to json
    this.data = JSON.parse(this.data);

    console.log(this.data);
  }

  ngOnInit() {
    this.fu = this.formBuilder.group({
      name: ['', Validators.required],
      file: ['', Validators.required]
    });
  }

  selectFile(event) {
    console.log(event.target.files[0]);
    this.fileToUpload = event.target.files[0];
  }


  // handleFileInput(files: FileList){
  //   this.fileToUpload=files.item(0);
  // }







  upload() {


    const formData = new FormData();
    formData.append('candidate_id', this.data.id);
    formData.append('file', this.fileToUpload);

    // this.fu.controls['file'].setValue(this.fileToUpload);
    console.log(formData);
    this.fileUpload.uploadUserProfile(formData)
      .subscribe(response => {
        console.log('file-upload : ' + response);
      });

  }

  // @ViewChild('fileInput') fileInput;
  // upload() {
  //   let fileBrowser = this.fileInput.nativeElement;
  //   if (fileBrowser.files && fileBrowser.files[0]) {
  //     const formData = new FormData();
  //     formData.append('file', fileBrowser.files[0]);
  //     formData.append('name', fileBrowser.files[0].name);

  //     this.fileUpload.uploadUserProfile(this.data.id, formData)
  //       .subscribe(response => {
  //         console.log('file-upload : ' + response);
  //       });

  // console.log(fileBrowser.files[0]);
  // console.log(fileBrowser.files[0].name);
  // console.log(fileBrowser.files[0].size);
  // console.log(fileBrowser.files[0].length);
  // console.log(fileBrowser.files[0].type);
  // console.log(fileBrowser.files[0].lastModifiedDate.toLocaleDateString());
  // this.projectService.upload(formData, this.project.id).subscribe(res => {
  //   // do stuff w/my uploaded file
  // });
}

