import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }


  // custom validators for cadidate details form

  static regex(pattern: string): Function {
    return (control: AbstractControl): {[key: string]: any} => {
      return control.value.match(pattern) ? null : {pattern: true};
    };
  }


  //Email Validator
  static emailValidator(control) {
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'InvalidEmail': true };
    }
  }

  //Password Validator
  static passwordValidator(control) {
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { 'InvalidPassword': true };
    }
  }

  // Number Validator
  static numberValidator(control): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      // if control value is not null and is a number
      if (control.value !== null && !control.value.match(/^[a-zA-Z]+$/)) {
        return { isNumber: true };
      };
      return null;
    }
  }

  // Number Validator
  static alpabetValidator(control): ValidatorFn {

    // console.log(/^[a-zA-Z]+$/.test(control.value));
    // console.log(control.value !== null && /^[a-zA-Z]*$/.test(control.value));

    return (control: AbstractControl): { [key: string]: any } | null => {
      // if control value is not null and is a number
      if (control.value !== null && !/^[a-zA-Z]*$/.test(control.value)) {
        return { isalphabet: true };
      };
      return { isalphabet: false };
    };
  }

  static ageLimitValidator(minAge: number, maxAge: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      // if control value is not null and is a number
      if (control.value !== null) {
        // return null  if it's in between the minAge and maxAge and is A valid Number
        return isNaN(control.value) || // checks if its a valid number
          control.value < minAge || // checks if its below the minimum age
          control.value > maxAge // checks if its above the maximum age
          ? { ageLimit: true } // return this incase of error
          : null; // there was not error
      }
      return null;
    };
  }




}
