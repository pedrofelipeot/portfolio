import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var VANTA: any;

@Component({
  selector: 'app-projetos',
  standalone: false,
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent implements AfterViewInit, OnDestroy {
  private vantaEffect: any;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    const container = document.querySelector('.fundo-projetos');
    if (container) {
this.vantaEffect = VANTA.WAVES({
  el: container,
  color: 0x0F1520,          // Cor principal da onda
  waveColor: 0x112233,      // Cor da onda
  backgroundColor: 0x0F1520, // Fundo azul escuro
  highlightColor: 0x004466,  // Reflexos
  shininess: 10,             // Brilho reduzido (antes estava 80)
  waveHeight: 20,
  waveSpeed: 0.7,
  zoom: 0.9,
});





    }

    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 50);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
}
