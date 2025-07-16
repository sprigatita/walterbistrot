import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-orari',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './orari.component.html',
  styleUrl: './orari.component.scss'
})
export class OrariComponent {
  openingHours = [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: '4pm - 10:30pm' },
    { day: 'Wednesday', hours: '4pm - 10:30pm' },
    { day: 'Thursday', hours: '4pm - 10:30pm' },
    { day: 'Friday', hours: '4pm - 10:30pm' },
    { day: 'Saturday', hours: '4pm - 10:30pm' },
    { day: 'Sunday', hours: '4pm - 10:30pm' }
  ];
}
