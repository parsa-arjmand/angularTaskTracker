import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() color: string;
  @Input() text: string;
  @Output() buttonClicked = new EventEmitter();
  onClick() {
    this.buttonClicked.emit();
  }
}
