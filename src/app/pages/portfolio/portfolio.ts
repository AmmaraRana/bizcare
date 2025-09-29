import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,  // important for imports
  imports: [CommonModule],
  templateUrl: './portfolio.html'
})
export class Portfolio implements OnInit {
  city: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.city = params['city'] || null;
    });
  }
}
