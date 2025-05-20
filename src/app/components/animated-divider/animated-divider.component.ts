import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-divider',
  standalone: true,
  imports: [CommonModule], // <-- IMPORTA CommonModule
  templateUrl: './animated-divider.component.html',
  styleUrls: ['./animated-divider.component.scss']
})
export class AnimatedDividerComponent {
  @Input() character: string = '✦';
  characters = Array.from({ length: 200 });
}
