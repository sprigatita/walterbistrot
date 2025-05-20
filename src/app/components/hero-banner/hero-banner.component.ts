import { AfterViewInit, Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent implements AfterViewInit{

  ngAfterViewInit() {
    // Se il video non parte automaticamente, inizia quando l'utente interagisce
    const video = document.getElementById('hero-video') as HTMLVideoElement;

    if (video) {
      // Ascolta il clic dell'utente per avviare il video
      document.body.addEventListener('click', () => {
        video.play().catch((error) => {
          console.error('Autoplay failed:', error);
        });
      });
    }
  }

}
