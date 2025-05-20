import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

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
