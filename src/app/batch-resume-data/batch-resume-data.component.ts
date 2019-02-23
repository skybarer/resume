import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-batch-resume-data',
  templateUrl: './batch-resume-data.component.html',
  styleUrls: ['./batch-resume-data.component.css']
})
export class BatchResumeDataComponent implements OnInit {

  title = 'Candidate Excel To Json Conveter';
  fileToUpload: File = null;
  data: any;



  constructor(private router: Router) { }

  ngOnInit() {

    // routing inside a component.
    // this.router.navigate(['list-all-candidate-details']);

  }


  /* ... (within the component class definition) ... */
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = XLSX.utils.sheet_to_json(ws, { raw: true });
      // this.data = XLSX.utils.sheet_to_json(ws, {header: 1});
     // console.log(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  upload(event) {
   // console.log(event.target.files[0]);
    this.fileToUpload = event.target.files[0];

  }


}


