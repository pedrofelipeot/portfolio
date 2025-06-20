import { Component, AfterViewInit, OnDestroy } from '@angular/core';

declare var VANTA: any;
declare var ScrollReveal: any;
declare var THREE: any;

@Component({
  selector: 'app-experiencias',
  standalone: false,
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.css'
})
export class ExperienciasComponent implements AfterViewInit, OnDestroy {
  private vantaEffect: any;

  ngAfterViewInit(): void {
    this.vantaEffect = VANTA.GLOBE({
      el: document.querySelector('.fundo-experiencia'),
      THREE: THREE,
      color: 0x00b7ff,
      backgroundColor: 0x01a1a2e,
      size: 1.5
    });

    ScrollReveal().reveal('.fade-in-up', {
      distance: '40px',
      duration: 800,
      easing: 'ease-out',
      origin: 'bottom',
      interval: 150
    });
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
}
