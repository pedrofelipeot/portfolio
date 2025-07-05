import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var VANTA: any;
declare var ScrollReveal: any;


@Component({
  selector: 'app-projetos',
  standalone: false,
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent implements AfterViewInit, OnDestroy {
  private vantaEffect: any;
  projetoSelecionado: string | null = null;
  imagemFullScreen: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    const container = document.querySelector('.fundo-projetos');
    if (container) {
      this.vantaEffect = VANTA.WAVES({
        el: container,
        color: 0x0F1520,
        waveColor: 0x112233,
        backgroundColor: 0x0F1520,
        highlightColor: 0x004466,
        shininess: 10,
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

    // === ScrollReveal animations ===
    ScrollReveal().reveal('#titulo', {
      origin: 'top',
      distance: '30px',
      duration: 800,
      opacity: 0,
      easing: 'ease-out',
    });

    ScrollReveal().reveal('.menu a', {
      origin: 'bottom',
      distance: '20px',
      duration: 600,
      opacity: 0,
      interval: 150,
      easing: 'ease-out',
    });

    ScrollReveal().reveal('.sessao-titulo', {
      origin: 'left',
      distance: '40px',
      duration: 800,
      opacity: 0,
      easing: 'ease-out',
      delay: 200,
    });

    ScrollReveal().reveal('.card-container', {
      origin: 'bottom',
      distance: '30px',
      duration: 600,
      opacity: 0,
      interval: 150,
      easing: 'ease-out',
    });
  }

  abrirDetalhes(projeto: string) {
    this.projetoSelecionado = projeto;
  }

  fecharDetalhes() {
    this.projetoSelecionado = null;
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
  
 abrirImagemFullscreenMobile(src: string) {
  if (window.innerWidth <= 768) {
    this.imagemFullScreen = src;
  }
}

fecharImagemFullscreenMobile() {
  this.imagemFullScreen = null;
}


}
