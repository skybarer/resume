import { Component, OnInit } from '@angular/core';
import { DemandDetailsSearchService } from './demand-details-search.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dmu-details-search',
  templateUrl: './dmu-details-search.component.html',
  styleUrls: ['./dmu-details-search.component.css']
})
export class DmuDetailsSearchComponent implements OnInit {


  response: any;

  skills: any;
  streams: any;
  sbuStreams: any;
  data: any;

  rf: FormGroup;
  submitted = false;


  title = 'Demand Tracker Search';

  constructor(
    private formBuilder: FormBuilder,
    private activeRouter: ActivatedRoute,
    private router: Router,
    private demandDetailsSearchService: DemandDetailsSearchService
  ) { }

  ngOnInit() {
    this.demandDetailsSearchService.getAllStreamDetails()
      .subscribe(response => {
        this.streams = response;
        // console.log(response);
      }
      );

    this.demandDetailsSearchService.getDemandTrackerDetails()
      .subscribe(response => {
        this.response = response.message;
        // console.log(response);
      }
      );

    this.demandDetailsSearchService.getskillDemandDetails()
      .subscribe(response => {
        this.skills = response.message.skill;
        // console.log(this.skills);
      }
      );

    this.rf = this.formBuilder.group({
      streamName: ['', [Validators.required]],
      subStreamName: ['', [Validators.required]],
      skillName: ['', [Validators.required]],

    });


  }

  // convenience getter for easy access to form fields
  get f() { return this.rf.controls; }

  onSearch() {

    this.submitted = true;

    if(this.rf.invalid) {
      return;
    }

    this.demandDetailsSearchService.searchDemandTrackerDetails(this.rf.value)
      .subscribe(response => {

        if (typeof response.message === 'string') {
          this.response = [];
        } else {
          this.response = response.message;
        }
        // console.log(this.skills);
      }
      );

  }

  onChange() {

    console.log(this.rf.value.streamName);



    this.demandDetailsSearchService.getAllSubStreamDetails(this.rf.value.streamName)
      .subscribe(response => {
        this.sbuStreams = response;
        console.log(response);
      }
      );

    // this.streams.forEach(x => {
    //   if (x.streamName == this.rf.value.streamName) {
    //     this.sbuStreams = x.subStreamEntity;
    //    console.log(x.subStreamEntity);
    //   }
    // });

  }

  onGapProfileSelect(x) {
    localStorage.setItem('dmu-candidate-details', JSON.stringify(x));
    alert('==Routing to Candidate Details List==');
    this.router.navigate(['list-all-candidate-details'], { relativeTo: this.activeRouter.parent });
  }

}
