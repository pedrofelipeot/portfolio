import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portifolio';

  mostrarBotaoTopo = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const alturaScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.mostrarBotaoTopo = alturaScroll > 300;
  }

  voltarAoTopo(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
