import { Component, AfterViewInit } from '@angular/core';

declare var ScrollReveal: any;

@Component({
  selector: 'app-linha-tempo',
  standalone: false,
  templateUrl: './linha-tempo.component.html',
  styleUrl: './linha-tempo.component.css'
})
export class LinhaTempoComponent implements AfterViewInit {
  abertos: boolean[] = [false, false, false, false];

  alternar(index: number): void {
    this.abertos[index] = !this.abertos[index];
  }

  ngAfterViewInit(): void {

    ScrollReveal().reveal('.timeline-section h2', {
      distance: '40px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-out',
      opacity: 0,
      delay: 100,
      reset: false
    });

    ScrollReveal().reveal('.timeline-item', {
      distance: '50px',
      origin: 'right',
      duration: 1200,
      easing: 'ease-out',
      opacity: 0,
      interval: 200,
      reset: false
    });
  }
}
