// src/app/pages/service-detail/service-detail.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [],
  templateUrl: './service-detail.html',   
  styleUrls: ['./service-detail.css']    
})
export class ServiceDetail {
  serviceSlug: string | null = null;
  serviceName: string = 'Unknown Service';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.serviceSlug = params.get('slug');
      const stateName = history.state?.name;
      this.serviceName = stateName || this.serviceSlug || 'Unknown Service';
    });
  }
}
