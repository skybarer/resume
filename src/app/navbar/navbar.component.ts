import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {
  

  logo = 'HCL ';
  data: any;

  constructor(
    private loginSerive : LoginService,
    private router:Router,
    private notifier:NotifierService
    ){ }

  ngOnInit() {
    this.data =JSON.parse(localStorage.getItem('currentUser'));
  }

  hasRole(input:string){
    if(this.data.role[0].authority == input){
      return true;
    }
    return false;
  }

  logout(){
    // alert("==your are logged out ==");
    this.loginSerive.logout();
    this.notifier.notify('success','Logged out Successfully.');
    this.router.navigate(['/login']);
  }

  homeLoad(){
    if(this.data.role[0].authority == 'ADMIN'){
      this.router.navigate(['admin-home']);
    }else if(this.data.role[0].authority == 'CUSTO  MER'){
      this.router.navigate(['customer-home']);
    }

  }



   



}
