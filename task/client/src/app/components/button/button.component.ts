import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() content?: string = this.content ? this.content : 'content';
  @Input() color?: string = this.color ? this.color : 'white';
  @Input() bgColor?: string = this.bgColor ? this.bgColor : 'black';
  @Input() path?: string = this.path ? this.path : window.location.pathname;
  constructor() { }

  ngOnInit(): void {
  }

}
