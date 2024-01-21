import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sprint } from '../models/sprint';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor(private httpClient : HttpClient) { }

  getSprints(): Observable<Sprint[]> {
    return this.httpClient.get(`${environment.apiUrl}/Sprints`) as Observable<Sprint[]>;
  }

  addSprint(sprint: Sprint): Observable<Sprint> {
    return this.httpClient.post<Sprint>(`${environment.apiUrl}/Sprints`, sprint);
  }
  getOnSprint(Id : number) : Observable<Sprint> {
    return this.httpClient.get<Sprint>(`${environment.apiUrl}/Sprints/${Id}`) as Observable<Sprint>;
  }
  deletSprint (Id : number) : void
  {
    this.httpClient.delete<void>(`${environment.apiUrl}/Sprints/${Id}`);
  }
  updateSprint(sprint: Sprint): Observable<Sprint> {
    const url = `${environment.apiUrl}/Projets/${sprint.Id}`;
    return this.httpClient.put<Sprint>(url, sprint);
  }
  

  
}
