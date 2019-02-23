import { Component, OnInit } from '@angular/core';
import { SowPessUpdateService } from './sow-pess-update.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-sow-pess-update',
  templateUrl: './sow-pess-update.component.html',
  styleUrls: ['./sow-pess-update.component.css']
})
export class SowPessUpdateComponent implements OnInit {

  title = 'PES SOW STATUS';
  response: any;
  sowPessIds =[]; 

  constructor(
    private sowService: SowPessUpdateService,
    private notifier: NotifierService,
    private route: Router
    ) { }

  ngOnInit() {

    this.sowService.getCandidateSowPesDetails()
    .subscribe(response => {
        if(response.message === "Details are empty"){
            this.response =[];
        }else{
            this.response = response.message;
        }
    });
  }

  onChange(id) {
    // console.log(this.response[id - 1])
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

  for (const x in this.sowPessIds) {
      if (this.sowPessIds[x]) {
          keys.push(parseInt(x));
      }
  }
  // console.log(keys);
  // console.log(this.response);



  for (let i = 0; i < keys.length; i++) {
      this.response.forEach(x => {
          if (x.clientProcessId === keys[i]) {
              // console.log(x);
              editData['json'].push(
                  {
                      'id': x.id,
                      'name': x.name,
                      'sowNo': x.sowNo,
                      'stream': x.stream,
                      'subStream': x.subStream,
                      'status': x.status,
                      'clientProcessId': x.clientProcessId,
                      'contractNo':x.contractNo
                  }
              );
          }
      });
  }


//   console.log(editData.json);

  this.sowService.updateCandidateSowPesDetails(editData.json)
      .subscribe(response => {
          this.notifier.notify('success',response.message);
        //   alert(this.response);
        //   this.route.navigate(['sow-pess-search']);
      });





}

}
