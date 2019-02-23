import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BatchUploadService } from './batch-upload.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-batch-upload',
  templateUrl: './batch-upload.component.html',
  styleUrls: ['./batch-upload.component.css']
})
export class BatchUploadComponent implements OnInit {

  title = 'Candidate profile Upload';
  fu: FormGroup;
  data: any;
  fileToUpload: File = null;


  constructor(
    private formBuilder: FormBuilder,
    private batchUploadService: BatchUploadService,
    private notifer:NotifierService
    ) { }

  ngOnInit() {
    this.fu = this.formBuilder.group({
      file: ['', Validators.required]
    });
  }

  selectFile(event) {
    console.log(event.target.files[0]);
    this.fileToUpload = event.target.files[0];
  }

  upload() {


    const formData = new FormData();
    formData.append('file', this.fileToUpload);

    // this.fu.controls['file'].setValue(this.fileToUpload);
    console.log(formData);
    this.batchUploadService.uploadBatchProfile(formData)
      .subscribe(response => {
        console.log('file-upload : ' + response);
        this.notifer.notify('success',response.message);
      });

  }

}
