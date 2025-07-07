import { Component, AfterViewInit } from '@angular/core';

declare var ScrollReveal: any;

@Component({
  selector: 'app-habilidades',
  standalone: false,
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent implements AfterViewInit {
  ngAfterViewInit(): void {

    ScrollReveal().reveal('.agrupador h2, .linha-titulo', {
      distance: '40px',
      origin: 'bottom',
      duration: 1000,
      opacity: 0,
      easing: 'ease-out',
      interval: 150,
      reset: false
    });

    ScrollReveal().reveal('.cards-inline .card', {
      distance: '30px',
      scale: 0.95,
      opacity: 0,
      duration: 800,
      easing: 'ease-out',
      interval: 200,
      reset: false
    });


    ScrollReveal().reveal('.etapa', {
      distance: '50px',
      origin: 'left',
      opacity: 0,
      duration: 1000,
      easing: 'ease-out',
      interval: 200,
      reset: false
    });
  }
}
