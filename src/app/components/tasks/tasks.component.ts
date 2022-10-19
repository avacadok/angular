import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService
    .getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }
  //filter out the task that we deleted
  deleteTask(task: Task) {
    this.taskService
    .deteleTask(task)
    .subscribe(
      () => (this.tasks = this.tasks.filter(appt => appt.id !== task.id)))
  }

  reminderTask(task: Task) {
    task.reminder = !task.reminder;
    this.taskService
    .reminderTask(task)
    .subscribe()
  }

  addTask(task: Task) {
    this.taskService
    .addTask(task)
    .subscribe(task => this.tasks.push(task))
  }

}
