import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
  this.registerForm = this.formBuilder.group({
    fullname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.minLength(10)]],
    address1: ['', Validators.required],
    address2: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
    postal: ['', Validators.required]
});
}

get f() { return this.registerForm.controls; }

onSubmit() {
this.submitted = true;

if (this.registerForm.invalid) {return;}

console.log(this.registerForm.value)
}

onReset() {
this.submitted = false;
this.registerForm.reset();
}
}
