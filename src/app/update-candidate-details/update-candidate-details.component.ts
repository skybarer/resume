import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetResumeService } from '../get-resume-data/get-resume.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidationService } from '../get-resume-data/validation.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-update-candidate-details',
  templateUrl: './update-candidate-details.component.html',
  styleUrls: ['./update-candidate-details.component.css']
})
export class UpdateCandidateDetailsComponent implements OnInit {

  headerDetails = 'UPDATE PROFILE DETAILS';
  rf: FormGroup;
  submitted: boolean = false;
  response: any;
  data: any;
  fileToUpload: File = null;

  skills: any;
  primarySkills: any;
  secondarySkill: any;


  constructor(
    private formBuilder: FormBuilder,
    private getResumeService: GetResumeService,
    private activeRouter: ActivatedRoute,
    private router: Router,
    private notifier: NotifierService
  ) {
    // Get saved data from SESSIONSTORAGE
    this.data = localStorage.getItem('update-candidate-details');
  }

  ngOnInit() {

    // console.log(this.data);

    this.getResumeService.primarySkills().subscribe(
      response => {
        // this.skills = response.message.skill;
        this.primarySkills = response.message;

        console.log(this.primarySkills);
      },
      error => {
        console.log(error);
      }

    );

    // console.log(this.data);

    this.getResumeService.secondarySkills(JSON.parse(this.data).primarySkill).subscribe(
      response => {
        // this.skills = response.message.skill;
        this.secondarySkill = response.message;
      },
      error => {
        console.log(error);
      }

    );

    const EMAIL_REGEX = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

    this.rf = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), ValidationService.alpabetValidator]],
      contactNo: [0, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d*$/)]],
      alternateContactNo: [0, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d*$/)]],
      emailId: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      primarySkill: ['', [Validators.required]],
      secondarySkill: ['', [Validators.required]],
      noticePeriod: ['', [Validators.required]],
      servingNoticePeriod: ['', [Validators.required]],
      currentCompany: ['', [Validators.required]],
      hrContactPerson: ['', [Validators.required]],
      expYears: ['', [Validators.required]],
      expMonths: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      hclPositionRole: ['', [Validators.required]],
      referedBy: [''],
      modeOfInterview: ['', [Validators.required]],
      interviewDateTime: ['', Validators],
      currentCTC: ['', [Validators.required]],
      expectedCTC: ['', [Validators.required]],
      status: ['', [Validators.required]],
      comments: [''],
      hackerRankScore: [''],
      // hidden input feilds
      createdBy: [''],
      createdDate: [''],
      modifiedBy: [''],
      ModifiedDate: [''],
      version: [0],
      id: [0],
      resumeUploads: [{}]

    });

    //passing mock data to the candidate form







    // modified data before updating

    this.data = JSON.parse(this.data);
    this.data.createdDate = '';
    this.data.ModifiedDate = '';



    // console.log('UpdateCandidateDetailsComponent');
    // console.log(this.data);

    // if (this.data != null || this.data != undefined) {
    this.rf.patchValue(this.data);
    // }





  }

  // convenience getter for easy access to form fields
  get f() { return this.rf.controls; }

  onUpdate() {

    // if (this.rf.value.status === 'Shortlisted for Hackerrank') {

    //   this.notifier.notify('warning','Shortlisted for Hackerrank cannot be updated from here');

    //   return;

    // }


    const formData = new FormData();
    formData.append('file', this.fileToUpload);
    this.rf.value.id = this.data.id;
    this.rf.value.interviewDateTime = this.data.interviewDateTime;
    // console.log('this.rf.value.id' + this.rf.value.id);

    formData.append('candidate', JSON.stringify(this.rf.value));

    this.submitted = true;
    // stop here if form is invalid
    if (this.rf.invalid) {
      alert('some where went wrong.');
      return;
    }

    //making interview Date time empty
    // this.rf.value.interviewDateTime = '';

    this.getResumeService.updateCandidateDetails(formData)
      .subscribe(response => alert(response.message));

    // this.rf.reset('');

    // console.log(this.rf.value);
    // alert('SUCCESSFULLY UPDATED!! :-)\n\n' + JSON.stringify(this.rf.value));
    this.notifier.notify('success', 'CANDIDATE SUCCESSFULLY UPDATED!! :-)\n\n');

    this.router.navigate(['list-all-candidate-details'], { relativeTo: this.activeRouter.parent });

  }

  selectFile(event) {
    // console.log(event.target.files[0]);
    this.fileToUpload = event.target.files[0];
  }


  onChange() {

    this.getResumeService.getskillDemandDetails().subscribe(
      response => {
        // this.skills = response.message.skill;
        this.primarySkills = response.message;
      },
      error => {
        console.log(error);
      }

    );


    // console.log(this.rf.value.primarySkill)
    // console.log( this.skills)

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
