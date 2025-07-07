import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('menuMobile') menuMobile!: ElementRef;

  menuShow() {
    const menuMobile = this.menuMobile.nativeElement;
    const hamburger = document.querySelector('.hamburger');

    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      hamburger?.classList.remove('open');
    } else {
      menuMobile.classList.add('open');
      hamburger?.classList.add('open');
    }
  }
  fecharMenu() {
    const menuMobile = this.menuMobile.nativeElement;
    const hamburger = document.querySelector('.hamburger');

    menuMobile.classList.remove('open');
    hamburger?.classList.remove('open');
  }
}
