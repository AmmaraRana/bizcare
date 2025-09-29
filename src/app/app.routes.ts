import { Routes } from '@angular/router';
import { ServiceDetail } from './pages/service-detail/service-detail';
import { Home } from './components/home/home';
import { Pricing } from './pages/pricing/pricing';
import { Portfolio } from './pages/portfolio/portfolio';  
import { About} from './pages/about/about';  
export const routes: Routes = [
  { path: '', component: Home },       
  { path: 'services/:slug', component: ServiceDetail },
  { path: 'pricing', component: Pricing },  
  { path: 'portfolio', component: Portfolio },  
    { path: 'about', component: About },  
  { path: '**', redirectTo: '' }              
];
