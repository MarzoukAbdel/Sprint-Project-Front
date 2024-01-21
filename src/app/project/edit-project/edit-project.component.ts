import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  Id: string = "";
  Libelle: string = "";
  Description: string = "";
  SprintDays: string = "";
  DateDebut: string = "";
  DateFin: string = "";
  Sprints: string = "";
  updateSuccess: boolean = false;
  // ... (your other properties)
  //private router: Router | undefined // Inject the Router service
  editProjectForm: FormGroup = this.fb.group({
    // Initialize form controls with default or empty values
    Libelle: ['', Validators.required],
    Description: [''],
    SprintDays: ['', Validators.required],
    // ... add other form controls as needed
  });

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.Id = params.get('Id')!;
      this.Libelle = params.get('Libelle')!;
      this.Description = params.get('Description')!;
      this.SprintDays = params.get('SprintDays')!;
      this.DateDebut = params.get('DateDebut')!;
      this.DateFin = params.get('DateFin')!;
      this.Sprints = params.get('Sprints')!;
  
      console.log('Retrieved parameters:', params);
  
      // Optionally, you can initialize a form group with the retrieved values
      this.editProjectForm = this.fb.group({
        Libelle: [this.Libelle, Validators.required],
        Description: [this.Description],
        SprintDays: [this.SprintDays, Validators.required],
        // Add other form controls as needed
      });
  
      // Log the form values to the console
      console.log('Form values:', this.editProjectForm.value);
    });
  
  }
  onSubmit() {
    // Check if the form is valid
    if (this.editProjectForm.valid) {
      // Update the project object with form values
      const updatedProject: Project = {
        Id: parseInt(this.Id, 10),
        Libelle: this.editProjectForm.value.Libelle,
        Description: this.editProjectForm.value.Description,
        SprintDays: this.editProjectForm.value.SprintDays,
        // Add other properties as needed
      };

      // Call the ProjectService to update the project
      this.projectService.updateProject(updatedProject).subscribe(
        updatedProject => {
          // Handle the success response (e.g., show a success message)
          console.log('Project updated successfully:', updatedProject);
          this.updateSuccess = true;
          this.router.navigate(['/project/list']);

        },
        error => {
          // Handle the error response (e.g., show an error message)
          console.error('Error updating project:', error);
        }
      );
  

      }
  
  
  
}}
