import { Component } from '@angular/core';

@Component({
  selector: 'app-linha-tempo',
  standalone: false,
  templateUrl: './linha-tempo.component.html',
  styleUrl: './linha-tempo.component.css'
})
export class LinhaTempoComponent {
  abertos: boolean[] = [false, false, false];

  alternar(index: number): void {
    this.abertos[index] = !this.abertos[index];
  }
}
