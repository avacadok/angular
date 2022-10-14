import { Component, OnInit } from '@angular/core';
import { TasksList } from 'src/app/task-lists';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TasksList;
  
  constructor() { }

  ngOnInit(): void {
  }

}
