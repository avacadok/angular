import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { TasksList } from '../task-lists';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TasksList);
    return tasks;
  }
}
