import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  @Output() handleCLick = new EventEmitter();
  @Input() added?: true | false;
  @Input() content?: string;
  @Input() bgColor?: string = this.bgColor ? 'rgba(0,255,0,0.05)' : this.bgColor;
  @Input() color?: string = this.color ? 'rgba(0,0,0,0.05)' : this.color;
  icon = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  onClick = () => {
    this.added = false;
  }
}
