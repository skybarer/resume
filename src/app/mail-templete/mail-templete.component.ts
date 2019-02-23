import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { MailTempleteService } from './mail-templete.service';

@Component({
  selector: 'app-mail-templete',
  templateUrl: './mail-templete.component.html',
  styleUrls: ['./mail-templete.component.css']
})
export class MailTempleteComponent implements OnInit {

  title = 'Mail Tempelte';
  rf: FormGroup;
  submitted = false;
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private mailService: MailTempleteService,
    private notifier: NotifierService
  ) { }

  ngOnInit() {

    this.data = localStorage.getItem('mail-templete');
    console.log(this.data);

    this.rf = this.formBuilder.group({
      from: [''],
      to: [''],
      cc: [''],
      bcc: [''],
      subject: [''],
      message: [''],
    });

    this.rf.patchValue(
      // {
      //   to:this.data.replace(/[\[\]']+/g, '').replace(/"+/g,'')
      // }
      {
        "from": "sekhar.k@hcl.com",
        "to": "inkollu.a@hcl.com,jalda.a@hcl.com",
        "cc": "arundaniel@hcl.com,sreenivasareddy.a@hcl.com",
        "bcc": "",
        "subject": "Shortlisted for DBS Interview",
        "message": "Dear Candidate(s),\n  You have been shortlisted for technical discussion.\n\n\nRegards,\nHCL Delivery Team."
      }
    )
  }

  // convenience getter for easy access to form fields
  get f() { return this.rf.controls; }


  onSubmit() {
    this.submitted = true;

    console.log(this.rf.value);

    // stop here if form is invalidx
    if (this.rf.invalid) {
      // alert('some where went wrong.');
      return
    }

 

    this.mailService.emailCandidates(this.rf.value)
      .subscribe(response => {
        this.notifier.notify('success', response.message);
      });


  }

}
