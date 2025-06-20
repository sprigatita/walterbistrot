import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import { ViewportScroller } from '@angular/common';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit  {
  title = 'walterbistrot_fe';

  constructor(private viewportScroller: ViewportScroller) {}

  ngAfterViewInit(): void {
    const hash = window.location.hash;
    if (hash === '#italian-aperitivo') {
      setTimeout(() => this.scrollToCenter('italian-aperitivo'), 100);
    }
  }

  scrollToCenter(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth <= 768;

      const elementTop = element.getBoundingClientRect().top + window.scrollY;

      if (isMobile) {
        window.scrollTo({
          top: elementTop,
          behavior: 'smooth'
        });
      } else {
        const offset = window.innerHeight / 2 - element.offsetHeight / 2;
        window.scrollTo({
          top: elementTop - offset,
          behavior: 'smooth'
        });
      }
    }
  }


}
