import { Component, AfterViewInit } from '@angular/core';

declare var ScrollReveal: any;

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    ScrollReveal().reveal('.conteudo-titulo h1', {
      distance: '30px',
      origin: 'bottom',
      duration: 1000,
      easing: 'ease-out',
      opacity: 0,
      delay: 100,
      reset: false
    });

    ScrollReveal().reveal('.imagem img', {
      distance: '20px',        // reduzido de 50px
      origin: 'bottom',        // ajustado de 'left'
      duration: 1200,
      easing: 'ease-out',
      opacity: 0,
      delay: 200,
      reset: false
    });

    ScrollReveal().reveal('.conteudo-texto p', {
      distance: '20px',        // reduzido de 50px
      origin: 'bottom',        // ajustado de 'right'
      duration: 1200,
      easing: 'ease-out',
      opacity: 0,
      delay: 300,
      reset: false
    });
  }
}
