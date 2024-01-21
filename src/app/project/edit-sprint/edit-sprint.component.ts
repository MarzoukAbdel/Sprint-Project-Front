import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sprint } from 'src/app/models/sprint';
import { SprintService } from 'src/app/services/sprint.service';

@Component({
  selector: 'app-edit-sprint',
  templateUrl: './edit-sprint.component.html',
  styleUrls: ['./edit-sprint.component.css']
})
export class EditSprintComponent {
  sprintForm : FormGroup ; 
  sprintData: Sprint | undefined; 
  constructor(private sprintService: SprintService, private fb: FormBuilder) {

    this.sprintForm = this.fb.group({
      SprintName: [''],
      SprintGoal: [''],
      ProjetId: [0],
      UserStories: ['']
    });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  onSubmit() {
    const sprintData: Sprint = this.sprintForm.value;

    this.sprintService.updateSprint(sprintData).subscribe({
      next: (data: Sprint) => {
        // Success callback
        this.sprintData = data;
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
