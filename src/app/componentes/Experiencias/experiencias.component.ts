import { Component, AfterViewInit, OnDestroy, HostListener } from '@angular/core';

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
    this.initVanta();

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

  // Reaplica a animação com novo size quando a tela muda
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
