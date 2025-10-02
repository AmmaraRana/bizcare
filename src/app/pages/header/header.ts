import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmailModalComponent } from '../../shared/email-modal/email-modal';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, EmailModalComponent],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  // Dropdown
  desktopServices = false;   // <-- add this line for desktop dropdown

  // Modal
  showModal = false;

  // Mobile menu
  mobileMenu = false;
  mobileServices = false; // collapsible services inside sidebar
  isMobile = false;

  constructor(private router: Router) {}

  /** Navigate to service */
  goToService(name: string): void {
    const slug = name.replace(/\s+/g, '').toLowerCase();
    this.router.navigate(['/services', slug], { state: { name } });
    this.mobileMenu = false; 
    this.desktopServices = false; // auto-close desktop dropdown
  }

  /** Modal controls */
  toggleModal(state: boolean): void {
    this.showModal = state;
  }

  /** Hover effects for CTA button */
  onHover(event: Event): void {
    const el = event.target as HTMLElement | null;
    if (el) {
      el.style.backgroundColor = 'white';
      el.style.color = 'black';
    }
  }

  onLeave(event: Event): void {
    const el = event.target as HTMLElement | null;
    if (el) {
      el.style.backgroundColor = 'black';
      el.style.color = 'white';
    }
  }

  /** Screen resize handler */
  @HostListener('window:resize')
  onResize(): void {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.mobileMenu = false;
    }
  }

  ngOnInit(): void {
    this.onResize();
  }

  toggleMobileMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  toggleMobileServices() {
    this.mobileServices = !this.mobileServices;
  }

  openModal() {
    this.showModal = true;
    this.mobileMenu = false;
  }

  closeModal() {
    this.showModal = false;
  }

  goBack() {
    history.back();
  }
  openServices() {
  this.mobileServices = true;
}

closeServices() {
  this.mobileServices = false;
}

}
