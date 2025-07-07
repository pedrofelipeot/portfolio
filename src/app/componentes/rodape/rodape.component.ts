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
      opacity: 0,
      duration: 1500,
      easing: 'ease-out',
      reset: false
    });
  }
}
