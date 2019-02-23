import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { GetResumeService } from '../get-resume-data/get-resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-candidate-details',
  templateUrl: './view-candidate-details.component.html',
  styleUrls: ['./view-candidate-details.component.css']
})
export class ViewCandidateDetailsComponent implements OnInit {

  headerDetails = 'View Candidate Details';
  formLable = 'upload your resume(.docx,.pdf)';
  rf: FormGroup;
  submitted: boolean = false;
  response: any;
  data: any;


  constructor(
    private formBuilder: FormBuilder,
    private getResumeService: GetResumeService,
    private router: Router
  ) {
    this.data = localStorage.getItem('view-candidate-details');
    this.data = JSON.parse(this.data);

  }

  ngOnInit() {
    const EMAIL_REGEX = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

    this.rf = this.formBuilder.group({
      name: [{ value: '', disabled: true }, [Validators.required, Validators.minLength(3)]],
      contactNo: [{ value: 0, disabled: true }, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d*$/)]],
      alternateContactNo: [{ value: 0, disabled: true }, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d*$/)]],
      emailId: [{ value: '', disabled: true }, [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      skillSet: [{ value: '', disabled: true }, [Validators.required]],
      noticePeriod: [{ value: '', disabled: true }, [Validators.required]],
      servingNoticePeriod: [{ value: '', disabled: true }, [Validators.required]],
      currentCompany: [{ value: '', disabled: true }, [Validators.required]],
      hrContactPerson: [{ value: '', disabled: true }, [Validators.required]],
      experience: [{ value: '', disabled: true }, [Validators.required]],
      designation: [{ value: '', disabled: true }, [Validators.required]],
      hclPositionRole: [{ value: '', disabled: true }, [Validators.required]],
      referedBy: [{ value: '', disabled: true }, [Validators.required]],
      modeOfInterview: [{ value: '', disabled: true }, [Validators.required]],
      interviewDateTime: [{ value: '', disabled: true }, Validators],
      currentCTC: [{ value: '', disabled: true }, [Validators.required]],
      expectedCTC: [{ value: '', disabled: true }, [Validators.required]],
      status: [{ value: '', disabled: true }, [Validators.required]],
      comments: [{ value: '', disabled: true }, [Validators.required]],
      // hidden input feilds
      createdBy: [{ value: '', disabled: true }, Validators],
      createdDate: [{ value: '', disabled: true }, Validators],
      modifiedBy: [{ value: '', disabled: true }, Validators],
      ModifiedDate: [{ value: '', disabled: true }, Validators],
      version: [0, Validators],
      id: [0, Validators]
    });

    // passing mock data to the candidate form

    this.rf.patchValue(this.data);



  }

  // convenience getter for easy access to form fields
  get f() { return this.rf.controls; }



}
