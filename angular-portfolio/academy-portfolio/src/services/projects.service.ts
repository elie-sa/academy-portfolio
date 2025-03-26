import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../app/interfaces/Projects.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiUrl = 'https://my-json-server.typicode.com/christyantoun/frontend-session/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
