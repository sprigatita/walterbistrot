import {Component} from '@angular/core';
import {LightgalleryModule} from 'lightgallery/angular';
import {CommonModule} from '@angular/common';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],

  standalone: true,
  imports: [CommonModule, LightgalleryModule],
})
export class GalleryComponent {

}
