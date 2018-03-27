import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'To NOT Do List: an exercise in Angular 5';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  newTask: Task[] = [
    new Task("go to the lodge", 3),
    new Task("eat a pane-pane sandwich", 1),
    new Task("take some nootropics", 2)
  ];

  selectedTask = null;

  addTask(){
  alert("Hey fool");
  }

  finishedEditing() {
    this.selectedTask = null;
  }

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  priorityColor(currentTask) {



    if (currentTask.priority === 3) {

      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }


  }
}
