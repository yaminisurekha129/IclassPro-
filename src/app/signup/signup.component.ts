import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
// import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  signForm!: FormGroup;
  submitted = false;
  newEmail: string = '';
  newPassword: string = '';
  public items: { id: any, email: string, password: string }[] = [];

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.signForm = this.fb.group(
      {
        name:['',Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        password_confirmation: ['', Validators.required]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('password_confirmation')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  get formControls() {
    return this.signForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // Stop here if the form is invalid
    if (this.signForm.invalid) {
      return;
    }

    // Log the form values to the console
    console.log('Form Submitted:', this.signForm.value);

    // Optionally, you can log individual form values as well:
    console.log('Email:', this.signForm.value.email);
    console.log('Password:', this.signForm.value.password);
    console.log('Confirm Password:', this.signForm.value.password_confirmation);
  }

  

 

}
