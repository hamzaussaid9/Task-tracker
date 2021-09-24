import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ITask } from 'src/app/models/task';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  day: string = "";
  newTask: string = "";
  remainder: true | false = false;
  error: true | false = false;
  added: true | false = false;
  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
  }
  onSubmit = () => {
    if (this.day === '' || this.newTask === '')
      this.error = true;
    else {
      const newTask: ITask = {
        _id: uuidv4(),
        text: this.newTask,
        day: this.day,
        remainder: this.remainder
      }
      this.taskService.addTask(newTask).subscribe();
      this.day = "";
      this.newTask = "";
      this.remainder = false;
      this.error = false;
      this.added = true;
      setTimeout(() => {
        this.added = false;
      }, 2500);
    }
  }
}
