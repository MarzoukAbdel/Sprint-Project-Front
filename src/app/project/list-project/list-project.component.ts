import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
parseInt(arg0: number|undefined,arg1: number): number {
throw new Error('Method not implemented.');
}


  projects: Project[] = [];
  constructor(private projectService: ProjectService, private router : Router){}

  deleteProject(id: number) {
    // Ask for confirmation before proceeding
    const confirmation = window.confirm('Are you sure you want to delete this project?');

    if (confirmation) {
      console.log('Deleting project with ID:', id);

      this.projectService.deleteProject(id).subscribe(
        () => {
          
          // Optionally, update the projects array or perform other actions
          console.log('Project deleted successfully.');
          window.location.reload();
        },
        (error) => {
          console.error('Error deleting project:', error);
        }
      );
    } else {
      console.log('Deletion canceled.');
    }
  }
  
    addProjectRoute(): string {
      return '/add';
    }

  ngOnInit(): void {
    this.fetchProjects();  }

    fetchProjects() {
      this.projectService.getProjects().subscribe({
        next: (project) => {
          // Success callback
          this.projects = project;
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
