import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../services/Api';

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html'
})
export class TaskRowComponent implements OnInit {

  @Input() task : Task;

  constructor() { }

  ngOnInit() {
  }

}
