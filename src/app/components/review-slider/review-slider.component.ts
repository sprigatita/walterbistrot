import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {Review, ReviewService} from '../../services/review/review.service';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-review-slider',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './review-slider.component.html',
  styleUrl: './review-slider.component.scss'
})
export class ReviewSliderComponent implements OnInit, OnDestroy {
  reviews: Review[] = [];
  currentIndex = 0;
  intervalSub?: Subscription;

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe({
      next: (revs) => {
        this.reviews = revs;
        this.startAutoSlide();
      },
      error: (err) => {
        console.error('Errore nel recupero recensioni', err);
      }
    });
  }

  startAutoSlide() {
    this.intervalSub = interval(5000).subscribe(() => {
      this.next();
    });
  }

  next() {
    if (this.reviews.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    }
  }

  prev() {
    if (this.reviews.length > 0) {
      this.currentIndex =
        (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    }
  }

  ngOnDestroy(): void {
    this.intervalSub?.unsubscribe();
  }
}
