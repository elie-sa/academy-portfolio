import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../core/nav-bar/nav-bar.component';
import { AboutComponent } from '../features/portfolio/components/about/about/about.component';
import { LandingComponentComponent } from '../features/portfolio/components/landing/landing-component/landing-component.component';
import { ProjectsComponent } from '../features/portfolio/components/projects/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, AboutComponent, LandingComponentComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Academy Portfolio';
}
