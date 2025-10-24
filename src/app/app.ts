import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { LandingPage } from "./landing-page/landing-page";
import { Aboutme } from "./aboutme/aboutme";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPage, Aboutme],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
