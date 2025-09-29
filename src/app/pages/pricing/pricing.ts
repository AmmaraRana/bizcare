import { Component, QueryList, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './pricing.css',

  templateUrl: './pricing.html',
})
export class Pricing implements AfterViewInit {
  openedIndex: number | null = null;
  faqs = [
    { q: 'What kind of businesses does BizCare work with?', a: 'BizCare ERP serves SMEs, enterprises, retailers, distributors, manufacturers, and service-based organizations.' },
    { q: 'How long do ERP projects take to complete?', a: 'Typical ERP implementations take 2–6 months depending on business size and modules required.' },
    { q: 'Who will be on my BizCare project team?', a: 'You’ll have a dedicated project manager, ERP consultants, and technical support engineers assigned.' },
    { q: 'Do you offer one-time licensing or subscription plans?', a: 'Yes, BizCare offers both one-time licensing and flexible SaaS subscription packages.' },
    { q: 'What kind of support does BizCare provide?', a: 'We provide 24/7 technical support, on-site training, and continuous system upgrades.' }
  ];

  faqAnswerHeight: number[] = [];

  @ViewChildren('faqContent') faqContents!: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.faqContents.forEach((el, i) => {
      this.faqAnswerHeight[i] = el.nativeElement.scrollHeight;
    });
  }

  toggleFaq(i: number) {
    if (this.openedIndex === i) {
      this.openedIndex = null;
    } else {
      this.openedIndex = i;
    }

    setTimeout(() => {
      const el = this.faqContents.toArray()[i].nativeElement;
      this.faqAnswerHeight[i] = el.scrollHeight;
    }, 50);
  }
}
