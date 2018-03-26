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
    new Task("go to the lodge"),
    new Task("eat a pane-pane sandwich"),
    new Task("take some nootropics")
  ];

  addTask(){
  alert(${`"https://vignette.wikia.nocookie.net/theloudhouse/images/a/a1/How-about-no-gif-dr-evil-4.gif/revision/latest?cb=20180202204327"}`);
  }
}
