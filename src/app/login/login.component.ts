import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rf: FormGroup;
  roles: any;
  submitted = false;
  data: any;

  // roles: any = [
  //   { 'role': 'ADMIN' },
  //   { 'role': 'CUSTOMER' }
  // ];

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private notifier: NotifierService
  ) { }

  ngOnInit() {

    if (localStorage.getItem('currentUser')) {
      this.data = JSON.parse(localStorage.getItem('currentUser'));
      if (this.data.role.id == 1) {
        this.router.navigate(['admin-home']);
      } else if (this.data.role.id === 2) {
        this.router.navigate(['customer-home']);
      }

    }

    this.loginService.roles()
      .subscribe(
        response => {
          if (response.message != undefined) { this.roles = response.message; }
        },
        error => {
          // console.log(error);
          this.notifier.notify('error', error.message);
        }
      );

    // if(localStorage.getItem('currentUser')){
    //   console.log(localStorage.getItem('currentUser'));
    //   this.router.navigate(['/customer-home']);
    // }

    this.rf = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });

    // this.rf.patchValue(
    //   {
    //     'username': 'Srinivas',
    //     'password': 'abc123',
    //     'role': {
    //       "roleName": "ADMIN"
    //     }
    //   }
    // );

  }


  // convenience getter for easy access to form fields
  get f() { return this.rf.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalidx
    if (this.rf.invalid) {
      // alert('some where went wrong.');
      return
    }

    // if (this.rf.value.username == '' ||
    //   this.rf.value.password == '' ||
    //   this.rf.value.role == '') {
    //     return ;
    // }

    // console.log(this.rf.value);

    if (typeof this.rf.value.role == 'string') { this.rf.value.role = JSON.parse(this.rf.value.role); }
    // console.log(this.rf.value);cls

    this.loginService.login(this.rf.value)
      .subscribe(response => {
        if (response.code === '200') {
          // alert(response.message);
          this.notifier.notify('success', "login successful");
          localStorage.setItem('currentUser', JSON.stringify(response.message));
          // console.log(this.rf.value);
          if (this.rf.value.role.id === 1) {
            this.router.navigate(['admin-home']);
          } else if (this.rf.value.role.id === 2) {
            this.router.navigate(['customer-home']);
          }
        } else if (response.code === '401') {
          // alert(response.message);
          this.notifier.notify('error', response.message + ' Make Sure that Credentails are valid.');
          localStorage.setItem('currentUser', '');

        } else {
          this.notifier.notify('error', response.message + ' Make Sure that Credentails are valid.');
        }
        // console.log(response);
      },
        error => {
          this.notifier.notify('error', error.message);
        });
  }



}
