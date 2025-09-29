import { Component,OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  
    imports: [
    CommonModule  ,
    RouterLink
  ],
   animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-30px)' }))
      ])
    ])
  ],
  styleUrls: ['./home.css']
})
export class Home implements OnInit{

currentIndex = 0;   
hoverIndex: number | null = null;

 goToService(i: number) {
    this.currentIndex = i;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.services.length) % this.services.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.services.length;
  }

services = [
  {
    title: 'Enterprise ERP',
    titleSize: '22px',
    description: 'A complete ERP platform to manage finance, HR, inventory, production, and reporting — tailored for your business.',
    features: [
      'Accounting & Finance Management',
      'HR & Payroll',
      'Inventory & Stock Control',
      'Production Tracking',
      'Real-time Reports & Dashboards'
    ],
    icon: '💼',
    color: '#2563eb'
  },
  {
    title: 'Accounting Software',
    titleSize: '22px',
    description: 'Robust accounting software designed to simplify bookkeeping, ledgers, invoicing, and compliance.',
    features: [
      'Ledger & Journal Management',
      'Invoicing & Billing',
      'Tax & Compliance Reports',
      'Cash Flow Tracking'
    ],
    icon: '📊',
    color: '#10b981'
  },
  {
    title: 'Inventory & POS',
    titleSize: '22px',
    description: 'Smart inventory and POS solutions to track stock, manage sales, and streamline retail operations.',
    features: [
      'Stock & Warehouse Management',
      'Barcode & Batch Tracking',
      'Sales & POS Integration',
      'Multi-location Support'
    ],
    icon: '📦',
    color: '#f59e0b'
  },
  {
    title: 'Industry-Specific ERP',
    titleSize: '22px',
    description: 'Custom ERP solutions built for flour mills and other industries with specialized workflows.',
    features: [
      'Raw Material Tracking',
      'Production & Byproduct Management',
      'Yield & Output Reports',
      'Custom Modules for Flour Mills'
    ],
    icon: '🏭',
    color: '#8b5cf6'
  },
  {
    title: 'RecoveryPro',
    titleSize: '22px',
    description: 'Automated billing and recovery software to optimize collections and improve cash flows.',
    features: [
      'Billing & Invoicing',
      'Customer Account Tracking',
      'Recovery & Payment Reminders',
      'Collection Analytics'
    ],
    icon: '💳',
    color: '#ef4444'
  }
];
modules: { name: string; svg: SafeHtml }[] = [];

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    this.modules = [
      {
        name: 'Accounting',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
            <line x1="7" y1="8" x2="15" y2="8" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
            <line x1="7" y1="12" x2="13" y2="12" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
            <line x1="7" y1="16" x2="11" y2="16" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
          </svg>
        `)
      },
      {
        name: 'Inventory',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none">
            <path d="M21 16V8a2 2 0 0 0-2-2h-5V4H6v2H4v12a2 2 0 0 0 2 2h7v2h8a2 2 0 0 0 2-2z" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <line x1="6" y1="10" x2="14" y2="10" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
            <line x1="6" y1="14" x2="12" y2="14" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
          </svg>
        `)
      },
      {
        name: 'HR & Payroll',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none">
            <circle cx="12" cy="7" r="4" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle>
            <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        `)
      },
      {
        name: 'POS',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none">
            <rect x="2" y="4" width="20" height="14" rx="2" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
            <line x1="2" y1="10" x2="22" y2="10" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
            <line x1="8" y1="20" x2="16" y2="20" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
          </svg>
        `)
      },
      {
        name: 'Production',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none">
            <polygon points="3 11 12 2 21 11 12 20 3 11" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polygon>
            <line x1="12" y1="2" x2="12" y2="20" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></line>
          </svg>
        `)
      },
      {
        name: 'Reports',
        svg: this.sanitizer.bypassSecurityTrustHtml(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        `)
      }
    ];
  }


  servicesSmall = this.services.map(s => ({ title: s.title, icon: s.icon, color: s.color }));



  get currentService() {
    return this.services[this.currentIndex];
  }
projects = [
  { image: '/isb.jpg', city: 'Islamabad' },
  { image: '/lhr.jpg', city: 'Lahore' },
  { image: '/gj.jpg', city: 'Gujranwala' },
  { image: '/fsd.jpg', city: 'Faisalabad' },
  { image: '/multan.jpeg', city: 'Multan' },
  { image: '/sargodha.jpg', city: 'Sargodha' },
  { image: '/sahiwal.jpg', city: 'Sahiwal' },
  { image: '/gujrat.jpg', city: 'Gujrat' },
  { image: '/bahawalpur.jpg', city: 'Bahawalpur' },
  { image: '/malakand.jpg', city: 'Malakand' },
  { image: '/pesh.jpg', city: 'Peshawar' },
  { image: '/dgk.jpg', city: 'D.G. Khan' },
  { image: '/sindh.jpg', city: 'Sindh' },
  { image: '/balochistan.jpg', city: 'Balochistan' },
  { image: '/dik.jpg', city: 'D.I. Khan' }
];


onImgError(event: Event) {
  const target = event.target as HTMLImageElement;
  if (!target) return;

  // Prevent infinite loop if placeholder also errors
  if (target.dataset['fallback'] === 'true') return;

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>
    <rect width='100%' height='100%' fill='%23e5e7eb'/>
    <text x='50%' y='50%' alignment-baseline='middle' text-anchor='middle' font-size='28' fill='%23666'>
      Image not found
    </text>
  </svg>`;
  target.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  target.setAttribute('data-fallback', 'true');
}

logos = [
  { image: 'biz0.svg', name: 'BizCare' },
  { image: 'biz 1.svg', name: 'BizWay' },

  { image: 'biz2.svg', name: 'RecovrPro' },
  { image: 'biz4.svg', name: 'OilMate' },
  { image: 'biz5.svg', name: 'BizPos' },
  { image: 'biz6.svg', name: 'Restro' },
  // { image: 'assets/logos/flutter.png', name: 'Flutter' },
  // { image: 'assets/logos/aws.png', name: 'AWS' },
  // { image: 'assets/logos/docker.png', name: 'Docker' },
  // { image: 'assets/logos/mongodb.png', name: 'MongoDB' },
  // { image: 'assets/logos/mysql.png', name: 'MySQL' }
];
 creationImage: string = '/creation.jpg';
  clients: number = 0;
  years: number = 0;
  support: number = 0;
  cities: number = 0;

  ngOnInit() {
    this.animateValue('clients', 0, 280, 5000);
    this.animateValue('years', 0, 7, 5000);
    this.animateValue('support', 0, 20440, 5000);
    this.animateValue('cities', 0, 70, 5000);
  }

  animateValue(prop: 'clients' | 'years' | 'support' | 'cities', start: number, end: number, duration: number) {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      this[prop] = Math.floor(progress * (end - start) + start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  goToPortfolio(city: string) {
  this.router.navigate(['/portfolio'], { queryParams: { city } });
}
}
