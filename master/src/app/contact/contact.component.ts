import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitForm!: FormGroup;
  submitted = false;
  nameError = false;
  emailError = false;
  phoneError = false;
  messageError = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.submitForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    var phoneno = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

    this.nameError = (this.submitForm.controls['firstName'].value === "") ? true : false;
    this.emailError = (this.submitForm.controls['email'].value === "" || !regexp.test(this.submitForm.controls['email'].value)) ? true : false;
    this.phoneError = (this.submitForm.controls['phone'].value === "" || !phoneno.test(this.submitForm.controls['phone'].value)) ? true : false;
    this.messageError = (this.submitForm.controls['message'].value === "") ? true : false;

    if (this.nameError == false && this.emailError == false && this.phoneError == false && this.messageError == false) {
      alert('Thank You for contacting me :-)');
      this.submitForm.setValue({ firstName: '', email: '', phone: '', message: '' });
    }
  }

}
