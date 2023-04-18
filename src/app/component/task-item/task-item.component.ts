import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task;
  @Output() onDeleteTask = new EventEmitter<Task>();
  @Output() toggleReminder = new EventEmitter<Task>();
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  onToggleReminder(task: Task) {
    this.toggleReminder.emit(task);
  }
}
