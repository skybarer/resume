import { Component, OnInit } from '@angular/core';
import { GetResumeService } from '../get-resume-data/get-resume.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { ExcelServiceService } from './excel-service.service';
import { NotifierService } from 'angular-notifier';
import { PaginationService } from '../pagination.service';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

declare var $: any;

@Component({
  selector: 'app-candidate-details-list',
  templateUrl: './candidate-details-list.component.html',
  styleUrls: ['./candidate-details-list.component.css']
})



export class CandidateDetailsListComponent implements OnInit {


  candidateIdList = {};
  // array of all items to be paged
  private totalItems: number;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];


  title = 'PROFILE DETAILS';
  response: any;
  errorMessage: string;
  data: any;


  constructor(
    private getResumeService: GetResumeService,
    private activeRouter: ActivatedRoute,
    private router: Router,
    private excelService: ExcelServiceService,
    private notifier: NotifierService,
    private paginationService: PaginationService
  ) {

  }

  setPage(page: number) {

    // get pager object from service
    this.pager = this.paginationService.getPager(this.totalItems, page);

    // get current page of items
    // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.getResumeService.allCandidateDetails(page)
      .subscribe(response => {
        this.pagedItems = response.message;
        this.totalItems = response.recordCount;
      });
  }


  ngOnInit() {

    this.data = JSON.parse(localStorage.getItem('currentUser'));

    this.getResumeService.allCandidateDetails(1)
      .subscribe(response => {
        if (response != null) {
          this.pagedItems = response.message;
          this.totalItems = response.recordCount;
          this.setPage(1);
        }
      }, error => {
        this.notifier.notify('error', error.message);
      });
  }

  editCandidateDetails(candidate) {
    localStorage.setItem('update-candidate-details', JSON.stringify(candidate));
    // console.log(candidate);
    this.router.navigate(['update-candidate-details'], { relativeTo: this.activeRouter.parent });
  }
  uploadCandidateProfile(candidate) {
    localStorage.setItem('upload-candidate-profile', JSON.stringify(candidate));
    // console.log(candidate);
    this.router.navigate(['upload-candidate-profile'], { relativeTo: this.activeRouter.parent });
  }


  viewCandidateDetails(candidate) {
    localStorage.setItem('view-candidate-details', JSON.stringify(candidate));
    this.router.navigate(['view-candidate-details'], { relativeTo: this.activeRouter.parent });
  }
  ProfileSummary(x) {
    this.getResumeService.profileDetails(x.id)
      .subscribe(response => {
        if (response.message === 'Details are empty') {

          this.notifier.notify('warning', 'Candidate Profile details are empty.');
          this.notifier.notify('success', 'Routed to add profile Summary.');
          this.router.navigate(['candidate-profile-summary-add'], { relativeTo: this.activeRouter.parent });
        } else {
          localStorage.setItem('candidate-profile-summary', JSON.stringify(response.message));
          this.router.navigate(['candidate-profile-summary'], { relativeTo: this.activeRouter.parent });
        }

      })

  }
  profileSummaryAdd(x) {
    localStorage.setItem('candidate-profile-summary-add', JSON.stringify(x));
    this.router.navigate(['candidate-profile-summary-add'], { relativeTo: this.activeRouter.parent });
  }


  // process data to client

  processToClient() {
    const keys = [];
    for (const x in this.candidateIdList) {
      if (this.candidateIdList[x]) {
        keys.push(parseInt(x));
      }
    }
    // console.log(keys);
    this.getResumeService.insertClientProcessDetails(keys)
      .subscribe(response => { this.notifier.notify('success', response.message) });
    // this.router.navigate(['client-details-list'], { relativeTo: this.activeRouter.parent });

    //  const keys = [];
    //   for (let x in this.candidateIdList){
    //     keys.push(parseInt(x))
    //     console.log(keys);

    //   }
    //   this.candidateIdList=[];
  }

  initateHackerrank() {

    const keys = [];
    for (const x in this.candidateIdList) {
      if (this.candidateIdList[x]) {
        keys.push(parseInt(x));
      }
    }

    this.getResumeService.initiateHackerRank(keys)
      .subscribe(response => { this.notifier.notify('success', response.message) });
    // this.router.navigate(['client-details-list'], { relativeTo: this.activeRouter.parent });


  }





  // tableToExcel(table, EmployeeList) {

  //   let uri = 'data:application/vnd.ms-excel;base64,'
  //     , template = '<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv='content-type' content='text/plain; charset=UTF-8'/></head><body><table>{table}</table></body></html>'
  //     , base64 = function (s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))) }
  //     , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
  //   if (!table.nodeType) table = document.getElementById(table)
  //   var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
  //   window.location.href = uri + base64(format(template, ctx));
  // }  


  sendEmail() {

    const keys = [];
    for (const x in this.candidateIdList) {
      if (this.candidateIdList[x]) {
        keys.push(parseInt(x));
      }
    }

    //console.log(keys);
    //console.log(this.pagedItems);

    const emailList = [];
    this.pagedItems.forEach(x => {
      keys.forEach(y => {
        if (x.id == y) {
          emailList.push(x.emailId);
        }
      })

    });

    //console.log(emailList);

    if (emailList.length == 0) {
      this.notifier.notify('success', 'send  mail list cannot be empty');
    } else {
      localStorage.setItem('mail-templete', JSON.stringify(emailList));
      this.router.navigate(['mail-templete'], { relativeTo: this.activeRouter.parent });

      this.getResumeService.sendEmail()
        .subscribe(response => { this.notifier.notify('success', response.message) });
    }


  }

  tableToExcel(tableId) {
    const blob = new Blob([document.getElementById(tableId).innerText], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
    });
    FileSaver.saveAs(blob, 'candidate.xls');
  }

  tableToJson(tableToJson) {
    this.excelService.exportAsExcelFile(tableToJson, 'candidate.xls');
  }

  hasRole(input: string) {
    if (this.data.role[0].authority === input) {
      return true;
    }
    return false;
  }
}
