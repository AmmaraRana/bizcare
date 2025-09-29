import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './pages/about/about';
import { Footer } from './pages/footer/footer';
import { Header } from './pages/header/header';
import { Home } from './components/home/home';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'bizcare';
}
