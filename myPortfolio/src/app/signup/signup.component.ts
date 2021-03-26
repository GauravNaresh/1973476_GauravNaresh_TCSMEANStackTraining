import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupRef = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    user: new FormControl(),
    pass: new FormControl()
  })

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    let formObj = this.signupRef.getRawValue();
    sessionStorage.setItem("userInfo", JSON.stringify(formObj));
    this.router.navigate(["login"]);
  }

}
