import { Component, AfterViewInit } from '@angular/core';

declare var ScrollReveal: any;

@Component({
  selector: 'app-introducao',
  standalone: false,
  templateUrl: './introducao.component.html',
  styleUrl: './introducao.component.css'
})
export class IntroducaoComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    ScrollReveal().reveal('.intro-text h1', {
      distance: '30px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-out',
      opacity: 0,
      delay: 100,
      reset: false
    });

    ScrollReveal().reveal('.intro-text p', {
      distance: '20px',
      origin: 'bottom',
      duration: 800,
      easing: 'ease-out',
      opacity: 0,
      interval: 200,
      reset: false
    });

    ScrollReveal().reveal('.intro-img img', {
      scale: 0.8,
      opacity: 0,
      duration: 1200,
      easing: 'ease-out',
      delay: 300,
      reset: false
    });
  }
}
