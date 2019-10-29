import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjectStartComponent } from './project-start/project-start.component';

const projectRoute: Routes = [
  { path: '', 
    component: ProjectsComponent 
  },
  { 
    path: ':id', 
    component: ProjectComponent
  },
  { 
    path: ':id/edit', 
    component: EditProjectComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule {}