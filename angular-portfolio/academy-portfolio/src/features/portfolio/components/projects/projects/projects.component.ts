import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../../../../shared/card/card/card.component';
import { NgFor } from '@angular/common';
import { Project } from '../../../../../app/interfaces/Projects.interface';
import { ProjectsService } from '../../../../../services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [CardComponent, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  private projectsService = inject(ProjectsService);

  projects: Project[] = [];

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  onChildClick(message: string) {
    console.log('Received from child:', message);
  }
}
