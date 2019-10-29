import { Component, OnInit } from '@angular/core';
import { ProjectClient, Project } from '../../../services/Api';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html'
})
export class EditProjectComponent implements OnInit {
  project : Project;

  constructor(private projectClient: ProjectClient,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.project = data['project'];
      }
    )
  }

  onUpdateProject(){
    this.projectClient.updateProject(this.project);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
