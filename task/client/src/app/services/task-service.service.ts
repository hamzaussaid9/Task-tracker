import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITask } from '../models/task';
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private ApiUrl = 'https://node-task-tracker.herokuapp.com/tasks';

  constructor(private http:HttpClient) { }
  
  getTasks = (): Observable<ITask[]> => {
    return this.http.get<ITask[]>(this.ApiUrl)
  }

  deleteTask = (id: string): Observable<ITask[]> => {
    return this.http.delete<ITask[]>(`${this.ApiUrl}/${id}`)
  }

  updateTaskRemainder = (task: ITask) => {
    return this.http.patch(`${this.ApiUrl}/${task._id}`, task);
  }

  addTask = (task: ITask): Observable<ITask[]> => {
    return this.http.post<ITask[]>(this.ApiUrl, task);
  }

  getSingleTask = (id: string): Observable<ITask> => {
    return this.http.get<ITask>(`${this.ApiUrl}/${id}`);
  }

  updateSingleTask = (task: ITask): Observable<ITask> => {
    return this.http.put<ITask>(`${this.ApiUrl}/${task._id}`, task);
  }
}
