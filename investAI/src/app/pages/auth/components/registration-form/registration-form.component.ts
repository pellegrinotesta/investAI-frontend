import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { SharedModule } from '../../../../shared/shared.module';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {


    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      codiceFiscale: ['', Validators.required],
      dataNascita: ['', Validators.required],
      telefono: [''],
      indirizzo: ['']
    });
  }

  onSubmit() {
    if (this.registerForm.valid && this.passwordsMatch()) {
      const formData = this.registerForm.value;
      // chiamata HTTP al backend qui
      console.log('Registering user:', formData);
      // this.router.navigate(['/login']);
    }
  }

  passwordsMatch(): boolean {
    return this.registerForm.get('password')?.value === this.registerForm.get('confirmPassword')?.value;
  }


}
