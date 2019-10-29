import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Project, ProjectClient } from '../../services/Api';
import { Observable, Subscription } from 'rxjs/Rx';


@Injectable()
export class ProjectService{

  constructor(private projectClient : ProjectClient) { 
  }

  getProjectList(): Observable<Array<Project>> {
    return this.projectClient.getProjectList();
  }

  getProjectById(id: string) : Observable<Project> {
    return this.projectClient.getProjectById(id);
  }

}
