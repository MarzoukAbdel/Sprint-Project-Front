// confirmation-dialog.component.ts

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2>Confirmation</h2>
    <p>Are you sure you want to delete this project?</p>
    <button mat-button (click)="confirm()">OK</button>
    <button mat-button (click)="cancel()">Cancel</button>
  `,
})
export class ConfirmationDialogComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {}

  confirm() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
