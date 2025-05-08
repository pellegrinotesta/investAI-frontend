import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from './shared/enums/routes.enum';
import { authGuard } from './shared/guards/auth.guard';
import { roleGuard } from './shared/guards/role.guard';
import { ROLE_VISIBILITY } from './shared/constants/role-visibility.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesEnum.HOMEPAGE,
    pathMatch: 'full'
  },
  {
    path: RoutesEnum.AUTH,
    loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent)
  },
  /*
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/homepage/homepage.component').then(m => m.HomepageComponent),
    children: [
      {
        path: RoutesEnum.FRAME,
        canActivate: [roleGuard],
        data: {
          roles: ['ADMIN'],  // <-- questa è la chiave che il guard si aspetta
          logicalOperator: 'OR'  // opzionale, default è 'OR'
        },
        loadComponent: () => import('./pages/frames-calculation/components/calculator/calculator.component').then(m => m.CalculatorComponent)
      },
      {
        path: RoutesEnum.MANAGEMENT,
        canActivate: [roleGuard],
        data: {
          roles: ['ADMIN'],  // <-- questa è la chiave che il guard si aspetta
          logicalOperator: 'OR'  // opzionale, default è 'OR'
        },
        loadComponent: () => import('./pages/frames-calculation/components/frames/frame-management/frame-management.component').then(m => m.FrameManagementComponent)
      },
      {
        path: RoutesEnum.SETTINGS,
        canActivate: [roleGuard],
        data: {
          roles: ['ADMIN'],  // <-- questa è la chiave che il guard si aspetta
          logicalOperator: 'OR'  // opzionale, default è 'OR'
        },
        loadComponent: () => import('./pages/settings/components/settings/settings.component').then(m => m.SettingsComponent)
      },
      {
        path: RoutesEnum.PROFILE,
        canActivate: [roleGuard],
        data: {
          roles: ['ADMIN'],  // <-- questa è la chiave che il guard si aspetta
          logicalOperator: 'OR'  // opzionale, default è 'OR'
        },
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: RoutesEnum.NEWSLETTER,
        canActivate: [roleGuard],
        data: { roles: ROLE_VISIBILITY.NEWSLETTER },
        loadComponent: () => import('./pages/newsletter/newsletter.component').then(m => m.NewsletterComponent)
      },
      {
        path: RoutesEnum.USERS,
        canActivate: [roleGuard],
        data: {roles: ROLE_VISIBILITY.USERS},
        loadComponent: () => import('./pages/users/users.component').then(m => m.UsersComponent)
      },
      {
        path:  `${RoutesEnum.PATENTS}`,
        canActivate: [roleGuard],
        data: {roles: ROLE_VISIBILITY.PATENTS},
        loadComponent: () => import('./pages/patents/patents.component').then(m => m.PatentsComponent),
        children: [
            {
                path:  `${RoutesEnum.SEP}`,
                loadComponent: () => import('./pages/patents/components/sep/components/sep-patent-list/sep-patent-list.component').then(m => m.SepPatentListComponent)    
            },
            {
                path: `${RoutesEnum.SEP}/:mode/:id`,
                loadComponent: () => import('./pages/patents/components/sep/components/sep-patents-form/sep-patents-form.component').then(m => m.SepPatentsFormComponent)
            },
            {
              path: `${RoutesEnum.ETSI}`,
              loadComponent: () => import('./pages/patents/components/etsi/components/etsi-technology-list/etsi-technology-list.component').then(m => m.EtsiTechnologyListComponent)
            }, 
            {
              path: `${RoutesEnum.ETSI}/:mode/:id`,
              loadComponent: () => import('./pages/patents/components/etsi/components/etsi-technology-form/etsi-technology-form.component').then(m => m.EtsiTechnologyFormComponent)
            }, 
            {
              path: `${RoutesEnum.MPEG}`,
              loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
            },
            {
              path: `${RoutesEnum.DVB}`,
              loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
            }      
        ]   
      },
      {
        path: `${RoutesEnum.ETSI}/${RoutesEnum.COMMITTEE}`,
        canActivate: [roleGuard],
        data: {roles: ROLE_VISIBILITY.PATENTS},
        children: [
          {
            path: `:id`,
            loadComponent: () => import('./pages/patents/components/etsi/components/committees/committee/committee.component').then(m => m.CommitteeComponent)
          },
          {
            path: `edit/:id`,
            loadComponent: () => import('./pages/patents/components/etsi/components/committees/committee-edit/committee-edit.component').then(m => m.CommitteeEditComponent)
          }
        ]
      },
      {
        path: RoutesEnum.NEWSLETTER,
        canActivate: [roleGuard],
        data: {roles: ROLE_VISIBILITY.PATENTS},
        children: [
          {
            path: `${RoutesEnum.SDO_ROADMAPS}`,
            loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
          }, 
          {
            path: `${RoutesEnum.SDO_MEETINGS}`,
            loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
          }
        ]

      },
      {
        
          path: `${RoutesEnum.MAGAZINE}`,
          canActivate: [roleGuard],
          data: {roles: ROLE_VISIBILITY.PATENTS},
          loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
        
      },
      {
        path: `${RoutesEnum.DOCUMENTATION}/:section`,
        canActivate: [roleGuard],
        data: {roles: ROLE_VISIBILITY.DOCUMENTATION},
        loadComponent: () => import('./pages/documentation/documentation.component').then(m => m.DocumentationComponent),
      },
      {
        path: `${RoutesEnum.DOCUMENTATION}/:section/:subsection`,
        canActivate: [roleGuard],
        data: {roles: ROLE_VISIBILITY.DOCUMENTATION},
        loadComponent: () => import('./pages/documentation/documentation.component').then(m => m.DocumentationComponent),
      },
      {
        path: '**',
        redirectTo: RoutesEnum.HOMEPAGE
      }
    ]
  }*/
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
