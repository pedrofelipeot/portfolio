import { Component, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

declare var VANTA: any;
declare var THREE: any;
declare var ScrollReveal: any;

@Component({
  selector: 'app-experiencias',
  standalone: false,
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.css'
})
export class ExperienciasComponent implements AfterViewInit, OnDestroy {
  private vantaEffect: any;

  ngAfterViewInit(): void {
    this.initVanta();

    // ScrollReveal - animações
    ScrollReveal().reveal('.titulo-principal', {
      origin: 'top',
      distance: '40px',
      duration: 800,
      opacity: 0,
      easing: 'ease-out',
    });

    ScrollReveal().reveal('.experiencia-bloco', {
      origin: 'bottom',
      distance: '30px',
      duration: 700,
      opacity: 0,
      interval: 150,
      easing: 'ease-out',
      reset: false,
    });

    ScrollReveal().reveal('.soft-skills-section', {
      origin: 'left',
      distance: '40px',
      duration: 700,
      opacity: 0,
      delay: 300,
      easing: 'ease-out',
    });

    ScrollReveal().reveal('.skill-card', {
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      opacity: 0,
      interval: 100,
      delay: 900,
      easing: 'ease-out',
    });

    ScrollReveal().reveal('.resumo-profissional', {
      origin: 'right',
      distance: '40px',
      duration: 800,
      opacity: 0,
      delay: 400,
      easing: 'ease-out',
    });

    ScrollReveal().reveal('.ferramentas-section', {
      origin: 'bottom',
      distance: '30px',
      duration: 700,
      opacity: 0,
      delay: 500,
      easing: 'ease-out',
    });

    ScrollReveal().reveal('.ferramentas-grid img', {
      scale: 0.8,
      duration: 600,
      opacity: 0,
      interval: 100,
      delay: 700,
      easing: 'ease-out',
    });
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  @HostListener('window:resize')
  onResize() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
    this.initVanta();
  }

  private initVanta(): void {
    const screenWidth = window.innerWidth;

    let sizeValue = 2;
    if (screenWidth < 1200) sizeValue = 1.8;
    if (screenWidth < 992) sizeValue = 1.5;
    if (screenWidth < 768) sizeValue = 1;
    if (screenWidth < 500) sizeValue = 0.8;

    this.vantaEffect = VANTA.GLOBE({
      el: document.querySelector('.fundo-vanta'),
      THREE: THREE,
      color: 0x00b7ff,
      backgroundColor: 0x01a1a2e,
      size: sizeValue,
    });
  }
}
