import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from './shared/enums/routes.enum';
import { authGuard } from './shared/guards/auth.guard';
import { roleGuard } from './shared/guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesEnum.HOMEPAGE,
    pathMatch: 'full'
  },
  {
    path: RoutesEnum.AUTH,
    loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent)
  },
  {
    path: RoutesEnum.REGISTER,
    loadComponent: () => import('./pages/auth/components/registration-form/registration-form.component').then(m => m.RegistrationFormComponent)
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/homepage/homepage.component').then(m => m.HomepageComponent),
    children: [
      {
        path: RoutesEnum.PROFILE,
        canActivate: [roleGuard],
        data: {
          roles: ['CLIENTE', 'ADMIN'],  // <-- questa è la chiave che il guard si aspetta
          logicalOperator: 'OR'  // opzionale, default è 'OR'
        },
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: '**',
        redirectTo: RoutesEnum.HOMEPAGE
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
