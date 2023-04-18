import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() submitTask = new EventEmitter<Task>();
  text: string;
  day: string;
  reminder: boolean = false;
  subscription: Subscription;
  showAddTask: boolean;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  onSubmit() {
    if (!this.text) {
      alert('please add a task!');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.submitTask.emit(newTask);
    //clear the form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
