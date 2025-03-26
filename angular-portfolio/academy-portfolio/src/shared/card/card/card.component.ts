import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() img: string = '';
  @Input() imgText: string = '';
  @Input() title: string = '';

  @Output() buttonClicked = new EventEmitter<string>();

  sendOutput() {
    this.buttonClicked.emit('Github button clicked');
  }
}
