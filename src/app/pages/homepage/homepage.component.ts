import { Component } from '@angular/core';
import {HeroBannerComponent} from '../../components/hero-banner/hero-banner.component';
import {AboutUsComponent} from '../../components/about-us/about-us.component';
import {ContattiComponent} from '../../components/contatti/contatti.component';
import {GalleryComponent} from '../../components/gallery/gallery.component';
import {AnimatedDividerComponent} from '../../components/animated-divider/animated-divider.component';
import {MenuComponent} from '../../components/menu/menu.component';
import {ItalianAperitivoComponent} from '../../components/italian-aperitivo/italian-aperitivo.component';
import {OrariComponent} from '../../components/orari/orari.component';
import {ReviewSliderComponent} from '../../components/review-slider/review-slider.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeroBannerComponent,
    AboutUsComponent,
    ContattiComponent,
    GalleryComponent,
    AnimatedDividerComponent,
    MenuComponent,
    ItalianAperitivoComponent,
    OrariComponent,
    ReviewSliderComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
