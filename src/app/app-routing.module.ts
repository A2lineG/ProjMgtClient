import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { BasicLayoutComponent } from './components/common/layouts/basicLayout.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  { 
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', component: BasicLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      { 
        path: 'projects', 
        loadChildren: './projects/projects.module#ProjectsModule'
      },
      { 
        path: 'users', 
        loadChildren: './users/users.module#UsersModule'
      },
      { 
        path: 'dashboard', 
        component: ProjectListComponent
      },
      { 
        path: 'rfc', 
        component: ProjectListComponent
      },
      { 
        path: 'rfc-detail', 
        component: ProjectListComponent
      },
      { 
        path: 'timesheet', 
        component: ProjectListComponent
      }
    ]
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
