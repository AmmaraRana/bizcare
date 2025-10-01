import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  imports: [CommonModule],
  styleUrls: ['./about.css']
})
export class About {
  team = [
    {
      name: 'Saleem Raza',
      role: 'Chief Executive Officer (CEO)',
      image: 'sr.jpg',
      linkedin: 'https://www.linkedin.com/in/saleem-raza-004476155/'
    },
    {
      name: 'Rao Zeeshan',
      role: 'Chief Technology Officer (CTO)',
      image: 'rz.jpg',
      linkedin: 'https://www.linkedin.com/in/hafiz-muhammad-zeeshan-999b8422a/'
    },
    {
      name: 'Salman Nasir',
      role: 'Business Development Manager (BDM)',
      image: 'sn.jpg',
      linkedin: 'https://www.linkedin.com/'
    },
    {
      name: 'Mirza Farhan Waseem',
      role: 'Marketing Manager',
      image: 'mfw.png',
      linkedin: 'https://www.linkedin.com/'
    },
    {
      name: 'Abid Mirza',
      role: 'Customer Support Executive',
      image: 'am.jpg',
      linkedin: 'https://www.linkedin.com/in/abid-mirza-57ab8b211/'
    },
    {
      name: 'Waqar Jamil',
      role: 'Network Engineer',
      image: 'wj.jpg',
      linkedin: 'https://www.linkedin.com/'
    },
    {
      name: 'Hafiz Gufran Ali',
      role: 'IT Specialist',
      image: 'hga.jpg',
      linkedin: 'https://www.linkedin.com/'
    }
  ];

  values = [
    { title: 'Innovation', desc: 'We design cutting-edge, scalable solutions that transform industries.' },
    { title: 'Customer Focus', desc: 'We prioritize client needs with tailored, user-friendly software.' },
    { title: 'Reliability', desc: 'We deliver solutions you can trust with dedicated support.' },
    { title: 'Growth', desc: 'We empower businesses to scale, reduce costs, and increase efficiency.' }
  ];

  steps = [
    { title: 'Understanding Your Needs', desc: 'We begin by learning your goals, challenges, and industry requirements.' },
    { title: 'Tailored Solutions', desc: 'From ERP to custom apps, we create solutions specific to your business model.' },
    { title: 'Seamless Implementation', desc: 'We ensure smooth deployment with minimal disruption to operations.' },
    { title: 'Training & Support', desc: 'Our team provides hands-on training and ongoing technical support.' },
    { title: 'Continuous Improvement', desc: 'We upgrade and adapt solutions to keep you ahead in your industry.' }
  ];

  heroCells: { img?: string, shape: string, flipping?: boolean }[] = [];


imagePool = [
  'b.jpg', 'c.jpg', 'd.jpg',
  'e.jpg', 'f.jpg', 'g.jpg', 'h.jpg',
  'i.jpg', 'j.jpg', 'k.jpg', 'l.jpg',
  'm.jpg', 'n.jpg', 'o.jpg', 'p.jpg',
  'q.jpg', 'R.jpg', 's.jpg', 't.jpg',
  'u.jpg', 'v.jpg', 'w.jpg', 'x.jpg',
  'y.jpg', 'z.jpg'
];


  shapes = [
    'square',
    'circle',
    'round-tl',
    'round-tr',
    'round-bl',
    'round-br',
    'round-diag'
  ];

  ngOnInit() {
   
    this.heroCells = Array(120).fill(null).map(() => ({
      img: Math.random() > 0.2 ? this.getRandomImage() : undefined,
      shape: this.shapes[Math.floor(Math.random() * this.shapes.length)]
    }));

   
    setInterval(() => this.randomFlip(), 2000);
  }

  getRandomImage() {
    return this.imagePool[Math.floor(Math.random() * this.imagePool.length)];
  }

  randomFlip() {
    const indices = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * this.heroCells.length)
    );

    indices.forEach(i => {
      const cell = this.heroCells[i];
      if (!cell) return;

      cell.flipping = true;

      setTimeout(() => {
       
        if (Math.random() > 0.3) {
          cell.img = this.getRandomImage();
        } else {
          cell.img = undefined;
        }
        cell.shape = this.shapes[Math.floor(Math.random() * this.shapes.length)];
        cell.flipping = false;
      }, 300);
    });
  }
}
