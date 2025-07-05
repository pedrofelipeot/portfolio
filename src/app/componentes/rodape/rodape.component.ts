import { Component, AfterViewInit } from '@angular/core';

declare var ScrollReveal: any;

@Component({
  selector: 'app-rodape',
  standalone: false,
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent implements AfterViewInit {
  currentYear = new Date().getFullYear();

  ngAfterViewInit(): void {
    ScrollReveal().reveal('.site-footer', {
      opacity: 0,          // começa invisível
      duration: 2000,      // duração do fade-in (1s)
      easing: 'ease-out',
      reset: false         // só anima uma vez
    });
  }
}
