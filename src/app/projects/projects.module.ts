import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';
import { ProjectStartComponent } from './project-start/project-start.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjectService } from './project.service';
import { ProjectItemComponent } from './project-item/project-item.component';
import { TaskRowComponent } from './task-row/task-row.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    EditProjectComponent,
    ProjectStartComponent,
    ProjectItemComponent,
    TaskRowComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProjectsRoutingModule
  ],
  exports: [
  ],
  providers: [
    ProjectService
  ]
})
export class ProjectsModule { }
