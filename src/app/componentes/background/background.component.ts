import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: false,
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements AfterViewInit {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    const bgAnimation = this.elementRef.nativeElement.querySelector('#bgAnimation') as HTMLElement | null;
    const numberOfColorBoxes: number = 400;

    if (bgAnimation) {
      for (let i = 0; i < numberOfColorBoxes; i++) {
        const colorBox = this.renderer.createElement('div');
        this.renderer.addClass(colorBox, 'colorBox');
        this.renderer.appendChild(bgAnimation, colorBox);
      }
    }
  }
}
