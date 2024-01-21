import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sprint } from 'src/app/models/sprint';
import { SprintService } from 'src/app/services/sprint.service';

@Component({
  selector: 'app-list-sprint',
  templateUrl: './list-sprint.component.html',
  styleUrls: ['./list-sprint.component.css']
})
export class ListSprintComponent {
  sprints: Sprint[] = [];
  constructor(private sprintService: SprintService, private router : Router){}


  addProjectRoute(): string {
    return '/add/Sprint';
  }

  ngOnInit(): void {
    this.fetchProjects();  }

    fetchProjects() {
      this.sprintService.getSprints().subscribe({
        next: (Sprint) => {
          // Success callback
          this.sprints = Sprint;
        },
        error: this.handleError.bind(this)
     });
    }

    private handleError(error: any) {
      // Error callback
      console.error('Error adding project:', error);
      // Handle error, display error message, etc.
    }

}
