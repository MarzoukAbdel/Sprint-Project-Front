import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sprint } from 'src/app/models/sprint';
import { SprintService } from 'src/app/services/sprint.service';

@Component({
  selector: 'app-add-sprint',
  templateUrl: './add-sprint.component.html',
  styleUrls: ['./add-sprint.component.css']
})
export class AddSprintComponent {
  sprintForm : FormGroup ; 
  sprintData: Sprint | undefined; 
  constructor(private sprintService: SprintService, private fb: FormBuilder) {

    this.sprintForm = this.fb.group({
      SprintName: [''],
      SprintGoal: [''],
      ProjetId: [0],
      //UserStories: ['']
    });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  onSubmit() {
    // Get the sprint data from the form
    const sprintData: Sprint = this.sprintForm.value;
  
    // Send a request to the sprint service to add a new sprint
    this.sprintService.addSprint(sprintData).subscribe({
      next: (data: Sprint) => {
        // Success callback - this will be executed when the request is successful
        this.sprintData = data; // Assuming you want to store the added sprint data
      },
      error: this.handleError.bind(this) // Call the handleError method in case of an error
    });
  }

private handleError(error: any) {
  // Error callback
  console.error('Error adding Sprint:', error);
  // Handle error, display error message, etc.
}

}
