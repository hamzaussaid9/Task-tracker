import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title?: string= this.title === undefined ? 'title of header' : this.title ;
  @Input() color?: string = this.color === undefined ? 'black' : this.color;
  @Input() hasBtn?: true | false = this.hasBtn ? false : this.hasBtn;
  @Input() btnContent?: string = this.btnContent === undefined ? 'title of button' : this.btnContent;
  @Input() path?: string = this.path ? this.path : window.location.pathname;
  constructor() {
  }

  ngOnInit(): void {
  }

}
