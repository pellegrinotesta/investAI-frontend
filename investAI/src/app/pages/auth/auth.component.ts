import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LoginService } from './services/login.service';
import { finalize, takeUntil } from 'rxjs';
import { BasePageComponent } from '../../shared/base/base-page/base-page.component';
import { AuthenticatedUser } from '../../shared/models/authenticated-user.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent extends BasePageComponent implements OnInit {
  loginForm: FormGroup;

  constructor( injector: Injector, 
    private readonly router: Router,
    private readonly fb: FormBuilder, 
    private readonly loginService: LoginService,
    private readonly authService: AuthService) {
    super();
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  override ngOnInit(): void {
      const isLoggedUser = this.authService.isLogged();
      if(isLoggedUser) {
        this.goBack();
      }
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.executeLogin();
  }

  executeLogin() {
    const { username, password } = this.loginForm.value;
    this.loginService
      .login({ username, password })
      .pipe(
        takeUntil(this.onDestroy$),
        finalize(() => {})
      )
      .subscribe((user: AuthenticatedUser) => {
        this.authService.storeUser(user);
        this.router.navigate(["/"])
      })

  }

  goBack(): void {
    const redirectUrl = sessionStorage.getItem('auth:redirect');
    this.router.navigate([redirectUrl || '']);
  }

}
