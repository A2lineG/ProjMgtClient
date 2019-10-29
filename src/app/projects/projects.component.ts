import { Component, OnInit, OnDestroy } from '@angular/core';
import { Project } from '../../services/Api';
import { ProjectService } from './project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  private projects: Array<Project>;
  private getProjectListSub: Subscription;
  
  constructor(private projectService : ProjectService) { }

  ngOnInit(){
    this.getProjectListSub = this.projectService.getProjectList().subscribe(list => {
      this.projects = list;
    });
  }

  ngOnDestroy(){
    this.getProjectListSub.unsubscribe();
  }
}
