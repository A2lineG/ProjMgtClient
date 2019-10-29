import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Project } from '../../../services/Api';
import { ProjectService } from '../project.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {
  project$ : Observable<Project>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if(params["id"]){
          console.log("Paramètre : " + params["id"])
          this.project$ = this.projectService.getProjectById(params["id"]);
        }
      }
    )
  }

  onEdit() {
    this.router.navigate(['edit']);
  }
}
