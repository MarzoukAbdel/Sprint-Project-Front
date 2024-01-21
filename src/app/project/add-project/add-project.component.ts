import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  projectForm : FormGroup ; 
  projectData: Project | undefined; 
  constructor(private projectService: ProjectService, private fb: FormBuilder) {

    this.projectForm = this.fb.group({
      Libelle: [''],
      Description: [''],
      SprintDays: [0],
      Sprints: [[]]
    });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  onSubmit() {
    const projectData: Project = this.projectForm.value;

    this.projectService.addProject(projectData).subscribe({
      next: (data: Project) => {
        // Success callback
        this.projectData = data;
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
