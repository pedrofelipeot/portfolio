import { Component, AfterViewInit } from '@angular/core';

declare var ScrollReveal: any;

@Component({
  selector: 'app-contatos',
  standalone: false,
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent implements AfterViewInit {
  emailDestino: string = 'felipepedrofutebol2004@gmail.com';

  get formAction() {
    return `https://formsubmit.co/${this.emailDestino}`;
  }

  ngAfterViewInit(): void {

    ScrollReveal().reveal('.contato-box h2', {
      distance: '40px',
      origin: 'bottom',
      duration: 1000,
      opacity: 0,
      easing: 'ease-out',
      delay: 100,
      reset: false
    });

    ScrollReveal().reveal('.contato-meios a', {
      distance: '30px',
      origin: 'left',
      duration: 800,
      opacity: 0,
      easing: 'ease-out',
      interval: 200,
      reset: false
    });

    ScrollReveal().reveal('.form-container', {
      distance: '20px',
      scale: 0.95,
      opacity: 0,
      duration: 1200,
      easing: 'ease-out',
      delay: 200,
      reset: false
    });
  }
}
