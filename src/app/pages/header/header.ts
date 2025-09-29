import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  // Dropdown
  isOpen = false;

  // Modal
  showModal = false;

  // Mobile menu
  mobileMenu = false;
  mobileServices = false; // collapsible services inside sidebar
  isMobile = false;

  constructor(private router: Router) {}

  /** Desktop services dropdown */
  openServices(): void {
    this.isOpen = true;
  }
  closeServices(): void {
    this.isOpen = false;
  }

  /** Navigate to service */
  goToService(name: string): void {
    const slug = name.replace(/\s+/g, '').toLowerCase();
    this.router.navigate(['/services', slug], { state: { name } });
    this.mobileMenu = false; // auto-close sidebar on navigation
  }

  /** Modal controls */
  toggleModal(state: boolean): void {
    this.showModal = state;
  }
  closeModal(): void {
    this.showModal = false;
  }
  openModal(): void {
    this.showModal = true;
  }

  /** Sidebar controls */
  toggleMobileMenu(): void {
    this.mobileMenu = !this.mobileMenu;
  }
  toggleMobileServices(): void {
    this.mobileServices = !this.mobileServices;
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
      this.mobileMenu = false; // close sidebar if switching to desktop
    }
  }

  /** Init check on load */
  ngOnInit(): void {
    this.onResize();
  }
}
