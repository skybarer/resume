import { Component, OnInit } from '@angular/core';
import { ClientDetailsListService } from './client-details-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as FileSaver from 'file-saver';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExcelServiceService } from 'src/app/candidate-details-list/excel-service.service';
import { PaginationService } from '../pagination.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-client-details-list',
  templateUrl: './client-details-list.component.html',
  styleUrls: ['./client-details-list.component.css']
})
export class ClientDetailsListComponent implements OnInit {

  totalItems: number;

  // pager object
   pager: any = {};

  // paged items
  pagedItems: any[];

  response: any;
  rf: FormGroup;

  title = 'SCHEDULE DETAILS';

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientDetailsListService,
    private excelService: ExcelServiceService,
    private activeRouter: ActivatedRoute,
    private router: Router,
    private notifier: NotifierService,
    private paginationService: PaginationService) { }


  setPage(page: number) {

    // get pager object from service
    this.pager = this.paginationService.getPager(this.totalItems, page);

    this.clientService.allClientProcessDetails(page)
      .subscribe(response => {
        this.pagedItems = response.message;
        this.totalItems = response.recordCount;
      });




    // get current page of items
    // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }



  ngOnInit() {

    this.clientService.allClientProcessDetails(1)
      .subscribe(response => {
        if(response.message === "Details are empty"){
          this.response =[];
          this.notifier.notify('warning',response.message);
      }else{
        this.pagedItems = response.message;
        this.totalItems = response.recordCount;
        this.setPage(1);
      }
       
      }, error => {
        this.notifier.notify('error', error.message);
      });

    this.rf = this.formBuilder.group({
      candidateName: [''],
      mobileNo: [''],
      status: [''],
      stream: [''],
      expFrom: [''],
      expTo: [''],
      dateFrom: [''],
      dateTo: [''],
      skill: [''],
    });

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

  clientDetailsUpdate(client) {
    localStorage.setItem('client-details-update', JSON.stringify(client));
    this.router.navigate(['client-details-update'], { relativeTo: this.activeRouter.parent });
  }

  onSearch() {
    this.clientService.searchClientProcessDetails(this.rf.value)
      .subscribe(response => { this.response = response.message });

    // console.log(this.rf.value);
  }

}
