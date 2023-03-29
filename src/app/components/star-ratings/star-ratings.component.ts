import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent {
  @Input() public rating = 5;

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);
    return Array(totalFullStars).fill(0);
  }

  public get hasHalfStar(): boolean {
    const highestRating = 5;
    const hasHalfStar = (this.rating - Math.floor(this.rating) >= 0.5) && this.rating !== highestRating;

    return hasHalfStar;
  }

  public get emptyStars(): number[] {
    const highestRating = 5;
    const totalEmptyStars = Math.round(highestRating - this.rating);
    if (highestRating - this.rating > 0)
      return Array(totalEmptyStars).fill(0);
    else
      return Array(totalEmptyStars);
  }
}
