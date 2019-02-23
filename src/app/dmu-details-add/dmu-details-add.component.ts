import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DmuDetailsAddService } from './dmu-details-add.service';
import { DemandDetailsSearchService } from '../dmu-details-search/demand-details-search.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-dmu-details-add',
  templateUrl: './dmu-details-add.component.html',
  styleUrls: ['./dmu-details-add.component.css']
})
export class DmuDetailsAddComponent implements OnInit {

  title = 'Add Demand Tracker Details';

  rf: FormGroup;
  response: any;
  skills: any;
  streams: any;
  sbuStreams: any;
  data: any;

  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private activeRouter: ActivatedRoute,
    private router: Router,
    private dmuService: DmuDetailsAddService,
    private demandDetailsSearchService: DemandDetailsSearchService,
    private notifier:NotifierService
  ) {



  }

  ngOnInit() {

    this.dmuService.getskillDemandDetails().subscribe(
      response => {
        this.response = response.message;
        // console.log(response);
      }
    );

    this.demandDetailsSearchService.getAllStreamDetails()
      .subscribe(response => {
        this.streams = response;
        // console.log(response);
      }
      );


    this.demandDetailsSearchService.getskillDemandDetails()
      .subscribe(response => {
        this.skills = response.message.skill;
        // console.log(this.skills);
      }
      );



    const NUMBER_PATTERN = /^\d*$/;

    this.rf = this.formBuilder.group({
      streamName: ['', [Validators.required]],
      subStreamName: ['', [Validators.required]],
      skillName: ['', [Validators.required]],
      count: ['', [Validators.required, Validators.pattern(NUMBER_PATTERN)]],
      fullfilled: ['', [Validators.required, Validators.pattern(NUMBER_PATTERN)]],
      gap: ['', [Validators.required, Validators.pattern(NUMBER_PATTERN)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.rf.controls; }

  onSubmit() {


    this.submitted = true;


    // console.log(this.rf.value);

    // stop here if form is invalidx
    if (this.rf.invalid) {
      // alert("some where went wrong.");
      return
    }

    this.dmuService.addDemandDetails(this.rf.value)
      .subscribe(response => {
        this.data = response.message;
        this.notifier.notify('success',this.data);
        this.router.navigate(['dmu-details-search'], { relativeTo: this.activeRouter.parent });
      }
      );

  }


  onReset() {
    this.rf.reset();
  }


  onChange() {

    if (this.rf.value.streamName === '') {
      return;
    }

    this.demandDetailsSearchService.getAllSubStreamDetails(this.rf.value.streamName)
      .subscribe(response => {
        this.sbuStreams = response;
        // console.log(response);
      }
      );

    // this.streams.forEach(x => {
    //   if (x.streamName == this.rf.value.streamName) {
    //     this.sbuStreams = x.subStreamEntity;
    //     console.log(x.subStreamEntity);
    //   }
    // });

  }


}
