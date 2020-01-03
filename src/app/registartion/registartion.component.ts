import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['./registartion.component.css']
})
export class RegistartionComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
  this.registerForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: ['', [Validators.required, Validators.minLength(5)]],
    gender: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['', Validators.required]
});
}

// convenience getter for easy access to form fields
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
