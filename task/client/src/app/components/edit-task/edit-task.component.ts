import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITask } from 'src/app/models/task';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  id: string = '';
  edited: true | false = false;
  task: ITask = {
    _id: '',
    remainder: false,
    day: '',
    text: ''
  };
  day: string = "";
  newTask: string = "";
  remainder: true | false = false;
  error: true | false = false;
  constructor(private route: ActivatedRoute, private taskService: TaskServiceService, private router:Router) { }

  ngOnInit(): void {
    (this.id as any) = this.route.snapshot.paramMap.get('id');
    this.taskService.getSingleTask(this.id).subscribe((task) => {
      this.task = task;
      this.day = this.task.day;
      this.newTask = this.task.text;
      this.remainder = this.task.remainder;
    })
  }
  onSubmit = () => {
    const editedTask: ITask = {
      _id: this.id,
      text: this.newTask,
      day: this.day,
      remainder: this.remainder
    }
    this.taskService.updateSingleTask(editedTask).subscribe();
    this.day = '';
    this.newTask = '';
    this.remainder = false;
    this.edited = true;
    setTimeout(() => {
      this.router.navigateByUrl('');
    },1000)
  }
}
