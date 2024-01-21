import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient : HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get(`${environment.apiUrl}/Projets`) as Observable<Project[]>;
  }
  addProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(`${environment.apiUrl}/Projets`, project);
  }
  updateProject(project: Project): Observable<Project> {
    const url = `${environment.apiUrl}/Projets/${project.Id}`;
    return this.httpClient.put<Project>(url, project);
  }

  // editProject(project: Project) {
  //   let id = project.Id;
  //   let  Libelle=project.Libelle;
  //   let Description=project.Description;
  //   let sprint = project.SprintDays;
  //   let date_debut=project.DateDebut;
  //   let date_Fin=project.DateFin;
  //   console.log(project);
  // }

  deleteProject(id: number): Observable<void> {
    const url = `${environment.apiUrl}/Projets/${id}`;
    return this.httpClient.delete<void>(url);
  }
  
}
