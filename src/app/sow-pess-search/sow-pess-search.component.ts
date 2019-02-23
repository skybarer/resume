import { Component, OnInit } from '@angular/core';
import { SowPessSearchService } from './sow-pess-search.service';
import { SowPess } from './sow-pess.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
    selector: 'app-sow-pess-search',
    templateUrl: './sow-pess-search.component.html',
    styleUrls: ['./sow-pess-search.component.css']
})
export class SowPessSearchComponent implements OnInit {

    title = 'ONBOARDING DETAILS';
    response: any;
    staicResponse: any;
    sowPessIds = [];
    sowPessModel: SowPess;
    sowPesStatus: any;
    statusData = [
        { 'status': 'PES PENDING' },
        { 'status': 'PES INPROGRESS' },
        { 'status': 'PES INITIATED' },
        { 'status': 'PES COMPLETE' },
        { 'status': 'SOW PENDING' },
        { 'status': 'SOW INITIATED' },
        { 'status': 'SOW SIGNED' }
    ];

    constructor(
        private sowService: SowPessSearchService,
        private activeRouter: ActivatedRoute,
        private route: Router,
        private notifer: NotifierService

    ) { }

    ngOnInit() {

        this.sowService.allClientSelectedDetails()
            .subscribe(response => {
                if (response.message === "Details are empty") {
                    this.response = [];
                    this.notifer.notify('warning', response.message);
                } else {
                    this.response = response.message;
                }

            });


    }

    onChange(id) {
        // console.log(this.response[id - 1].state)
        if (this.response[id - 1].state) {
            this.response[id - 1].state = false;
        } else {
            this.response[id - 1].state = true;

        }
        // console.log(this.editData);
        // console.log(this.response[id - 1]);
    }

    processToClient() {
        const keys = [];
        const editData = { 'json': [] };

        for (let x in this.sowPessIds) {
            if (this.sowPessIds[x]) {
                keys.push(parseInt(x));
            }
        }
        // console.log(keys);
        // console.log(this.response);



        for (let i = 0; i < keys.length; i++) {
            this.response.forEach(x => {
                if (x.clientProcessId == keys[i] && x.status!='Selected') {
                    // console.log(x);
                    editData['json'].push(
                        {
                            'id': null,
                            'name': x.candidateName,
                            'sowNo': x.sowNo,
                            'stream': x.stream,
                            'subStream': x.subStream,
                            'status': x.status,
                            'clientProcessId': x.clientProcessId
                        }
                    );
                }else{
                    this.notifer.notify('warning',x.candidateName+ ' satus is not selected properly.');
                }
            });
        }




        this.sowService.insertSelectedCandidateDetails(editData['json'])
            .subscribe(response => {
                // console.log(response);
                if(response.message == "Details are empty"){
                    this.response =[];
                    this.notifer.notify('warning',response.message);
                }else if( typeof this.response.message == "object") {
                    this.response = response.message;
                    this.notifer.notify('success', this.response);
                    this.route.navigate(['sow-pess-search'], { relativeTo: this.activeRouter.parent });
                }else if( typeof this.response.message == "string"){
                    this.response =[];
                    this.notifer.notify('success', this.response);  
                }else{
                    this.notifer.notify('success', this.response);  
                }
              
            });





    }



}
