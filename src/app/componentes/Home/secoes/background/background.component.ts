import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: false,
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent {
  colorBoxes = Array(225); 
}
