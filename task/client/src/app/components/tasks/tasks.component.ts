import { Component, OnInit} from '@angular/core';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ITask } from 'src/app/models/task';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];
  added: true | false = false;
  deleteIcon = faTimes;
  editIcon = faEdit;
  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
  handleDelete = (id: string) => {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task._id !== id);
      this.added = true;
      setTimeout(() => {
        this.added = false;
      },2500)
    })
  }
  handleRemainderChange = (task: ITask) => {
    if (task.remainder !== undefined)
      task.remainder = !task.remainder;
    this.taskService.updateTaskRemainder(task).subscribe();
  }
}
