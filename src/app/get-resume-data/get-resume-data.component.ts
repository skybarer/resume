import { Component, OnInit, ViewChild } from '@angular/core';
import { Candidate } from './get-resume-model.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetResumeService } from './get-resume.service';
import { ValidationService } from './validation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-get-resume-data',
  templateUrl: './get-resume-data.component.html',
  styleUrls: ['./get-resume-data.component.css']
})


export class GetResumeDataComponent implements OnInit {

  headerDetails = 'ADD PROFILE DETAILS';
  formLable = 'upload your resume(.docx,.pdf)';
  rf: FormGroup;
  submitted = false;
  response: any;
  fileToUpload: File = null;
  skills: any;
  primarySkills: any[];
  secondarySkill: any[];




  constructor(
    private formBuilder: FormBuilder,
    private getResumeService: GetResumeService,
    private activeRouter: ActivatedRoute,
    private router: Router,
    private notifier: NotifierService
  ) {
    this.createForm();


  }



  ngOnInit() {

    this.getResumeService.primarySkills().subscribe(
      response => {
        // this.skills = response.message.skill;
        this.primarySkills = response.message;
        // console.log(this.primarySkills);
      },
      error => {
        this.notifier.notify('error', error.message);
      }
    );







    //passing mock data to the candidate form

    // this.rf.patchValue(
      // {
      //   alternateContactNo: 9347812922,
      //   comments: 'comments',
      //   contactNo: '9550835760',
      //   currentCompany: 'hcl',
      //   currentCTC: '3.6',
      //   designation: 'software engineer',
      //   emailId: 'akashdhar.apssdc@gmail.com',
      //   expectedCTC: '4.6',
      //   expYears: '3',
      //   expMonths: '6',
      //   hclPositionRole: 'developer',
      //   hrContactPerson: 'naresh',
      //   interviewDateTime: '2018-11-05',
      //   modeOfInterview: 'FaceToFace',
      //   name: 'akashdhar',
      //   noticePeriod: '30',
      //   referedBy: 'naresh',
      //   servingNoticePeriod: 'Y',
      //   // primarySkill: 'JAVA SPRING',
      //   secondarySkill: 'CORE JAVA,SPRING MVC, JPA, HIBERNATE',
      //   status: 'Available',
      //   hackerRankScore: '92'
      // }

    //   {
    //     "name":"Akashdhar Inkollu",
    //     "contactNo":9550835760,
    //     "alternateContactNo":9550835760,
    //     "emailId":"akashdhar.apssdc@gmail.com",
    //     "noticePeriod":"1",
    //     "servingNoticePeriod":"Y",
    //     "currentCompany":"HCL",
    //     "hrContactPerson":"Narresh",
    //     "expYears":2,
    //     "expMonths":1,
    //     "designation":"Software Developer",
    //     "hclPositionRole":"Software Developer",
    //     "referedBy":"HR",
    //     "modeOfInterview":"FaceToFace",
    //     "interviewDateTime":"2018-07-02",
    //     "currentCTC":"3.6",
    //     "expectedCTC":"5",
    //     "status":"Available",
    //     "comments":"good candidate.",
    //     "resumeUploads":null,
    //     "hackerRankScore":null
    //  }
    // );
  }

  createForm() {
    const EMAIL_REGEX = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    const NUMBER_REGEX = /^\d*$/;
    const DECIMAL_REGEX = /^[0-9]+([,.][0-9]+)?$/g;
    const ALPHABET_REGEX = /^[a-zA-Z ]+$/;

    this.rf = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(ALPHABET_REGEX)]],
      contactNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(NUMBER_REGEX)]],
      alternateContactNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(NUMBER_REGEX)]],
      emailId: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      primarySkill: ['', [Validators.required]],
      secondarySkill: ['', [Validators.required]],
      noticePeriod: ['', [Validators.required, Validators.pattern(NUMBER_REGEX)]],
      servingNoticePeriod: ['', [Validators.required]],
      currentCompany: ['', [Validators.required, Validators.pattern(ALPHABET_REGEX)]],
      hrContactPerson: ['', [Validators.required, Validators.pattern(ALPHABET_REGEX)]],
      expYears: ['', [Validators.required, Validators.pattern(NUMBER_REGEX)]],
      expMonths: ['', [Validators.required, Validators.pattern(NUMBER_REGEX)]],
      designation: ['', [Validators.required, Validators.pattern(ALPHABET_REGEX)]],
      hclPositionRole: ['', [Validators.required, Validators.pattern(ALPHABET_REGEX)]],
      referedBy: ['',Validators.pattern(ALPHABET_REGEX)],
      modeOfInterview: ['', [Validators.required]],
      interviewDateTime: ['', Validators.required],
      currentCTC: ['', [Validators.required,Validators.pattern(DECIMAL_REGEX)]],
      expectedCTC: ['', [Validators.required,Validators.pattern(DECIMAL_REGEX)]],
      status: ['', [Validators.required]],
      comments: [''],
      hackerRankScore: [''],
      // hidden input feilds
      createdBy: [''],
      createdDate: [''],
      modifiedBy: [''],
      ModifiedDate: [''],
      version: [''],
      id: ['']

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.rf.controls; }


  onSubmit() {

    this.submitted = true;
    let formData = new FormData();
    formData.append('file', this.fileToUpload);
    formData.append('candidate', JSON.stringify(this.rf.value));

    // stop here if form is invalidx
    if (this.rf.invalid) {
      // alert('some where went wrong.');
      return
    }

    //custom json data



    this.getResumeService.insertCandidateDetails(formData)
      .subscribe(response => console.log(response));

    // this.rf.reset('');

    // console.log(this.rf.value);
    // alert('SUCCESSFULLY INSERTED!! :-)\n\n' + JSON.stringify(this.rf.value));
    this.notifier.notify('success','CANDIDATE DETAILS INSERTED SUCCESSFULLY !! :-)\n\n');
    this.rf.reset('');
    this.router.navigate(['list-all-candidate-details'], { relativeTo: this.activeRouter.parent });

  }

  onReset() {
    // alert('reset is clicked');
    // this.rf.reset(this.rf.value); 
    // return this.rf.reset('');
    this.createForm();
  }

  // Adding a file to the fomm



  selectFile(event) {
    // console.log(event.target.files[0]);
    this.fileToUpload = event.target.files[0];
  }

  onChange() {

    // console.log(this.rf.value.primarySkill)
    // console.log( this.skills)

    this.getResumeService.secondarySkills(this.rf.value.primarySkill).subscribe(
      response => {

        // this.skills = response.message.skill;
        this.secondarySkill = response.message;

        // console.log(this.secondarySkill);
      },
      error => {
        console.log(error);
      }

    );

    // this.skills.forEach(x => {
    //   if (x.primarySkill == this.rf.value.primarySkill) {
    //     this.secondarySkill =[
    //       {'secondarySkill':x.secondarySkill}
    //     ] ;
    //     console.log( this.secondarySkill);
    //   }
    // });

  }







}
