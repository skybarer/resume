import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientDetailsUpdateService } from './client-details-update.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';
import { ThrowStmt } from '@angular/compiler';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-client-details-update',
  templateUrl: './client-details-update.component.html',
  styleUrls: ['./client-details-update.component.css']
})
export class ClientDetailsUpdateComponent implements OnInit {
  title = 'SCHEDULE INTERVIEW';
  data: any;
  streams: any;
  sbuStreams: any;

  rf: FormGroup;
  submitted = false;

  statusList: any[] = [
    { 'status': 'Scheduled' },
    { 'status': 'Selected' },
    { 'status': 'Rejected' },
    { 'status': 'Hold' }
  ];


  constructor(
    private formBuilder: FormBuilder,
    private activeRouter: ActivatedRoute,
    private clientDetails: ClientDetailsUpdateService,
    private router: Router,
    private loginService: LoginService,
    private notifer: NotifierService
  ) {
    this.data = localStorage.getItem('client-details-update');
    //  console.log(this.data);
  }

  ngOnInit() {

    // console.log(typeof this.data);

    this.clientDetails.getAllStreamDetails()
      .subscribe(response => {
        if(response != null){
          this.streams = response;
        }
       
        // console.log(response);
      });


    this.clientDetails.getAllSubStreamDetails(JSON.parse(this.data).stream)
      .subscribe(response => {
        this.sbuStreams = response;
        // console.log(response);
      });

    this.rf = this.formBuilder.group({
      candidateName: ['', [Validators.required, Validators.minLength(3)]],
      mobileNo: ['', [Validators.required, Validators.minLength(3)]],
   
      status: ['', [Validators.required]],
      stream: ['', [Validators.required]],

      expFrom: [''],
      expTo: [''],
      dateFrom: [''],
      dateTo: [''],

      primarySkill: ['', [Validators.required]],
      secondarySkill: ['', [Validators.required]],
      subStream: ['', [Validators.required]],
      clientInterviewDate: ['', [Validators.required]],
      clientInterviewTime: ['', [Validators.required]],
      expYrs: ['', [Validators.required]],
      expMonths: ['', [Validators.required]],
      contactPerson: ['', [Validators.required]],
      clientProcessId: ['', [Validators.required]],
      id: ['', [Validators.required]],
    });


    this.rf.patchValue(JSON.parse(this.data));


  }

  // convenience getter for easy access to form fields
  get f() { return this.rf.controls; }

  onUpdate() {
    this.submitted = true;
 
  // stop here if form is invalidx
  if (this.rf.invalid) {
    // console.log(this.rf.value );
    // alert('some where went wrong.');
    return
  }
    
    this.clientDetails.updateClientProcessDetails(this.rf.value)
      .subscribe(response => {
        // console.log(response);
        // alert('====Client Details Updated Successfully===');x  
        this.notifer.notify('success', 'Client Details Updated Successfully');
        this.router.navigate(['client-details-update'], { relativeTo: this.activeRouter.parent });
      });

  }


  onChange() {
    // console.log(this.rf.value.stream);

    this.clientDetails.getAllSubStreamDetails(this.rf.value.stream)
      .subscribe(response => {
        if(response != null)
        this.sbuStreams = response;
        // console.log(response);
      });

    // this.streams.forEach(x => {
    //   if (x.streamName == this.rf.value.stream) {
    //     this.sbuStreams = x.subStreamEntity;
    //   }
    // });
  }

}
