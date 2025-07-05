import { Component, AfterViewInit } from '@angular/core';

declare var ScrollReveal: any;

@Component({
  selector: 'app-formacao-academica',
  standalone: false,
  templateUrl: './formacao-academica.component.html',
  styleUrl: './formacao-academica.component.css'
})
export class FormacaoAcademicaComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    ScrollReveal().reveal('.formacao-titulo', {
      distance: '20px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-out',
      opacity: 0,
      delay: 100,
      reset: false
    });

    ScrollReveal().reveal('.card.full-width', {
      distance: '20px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-out',
      opacity: 0,
      delay: 200,
      reset: false
    });

    ScrollReveal().reveal('.certificados-titulo', {
      distance: '20px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-out',
      opacity: 0,
      delay: 300,
      reset: false
    });

    ScrollReveal().reveal('.card.half-width', {
      distance: '20px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-out',
      opacity: 0,
      interval: 200,
      reset: false
    });
  }
}
