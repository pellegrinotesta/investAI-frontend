import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

interface DialogData {
  fieldTitle: string;
}

@Component({
    selector: 'app-add-row-dialog',
    imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, TranslateModule],
    templateUrl: './add-row-dialog.component.html',
    styleUrl: './add-row-dialog.component.scss'
})
export class AddRowDialogComponent {

  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  form: FormGroup = new FormGroup({
    field: new FormControl('', Validators.required)
  });

  constructor(private dialogRef: MatDialogRef<AddRowDialogComponent>) { }

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onSave(): void {
    if (this.form.valid)
      this.dialogRef.close(this.form.get("field")?.value);
  }

}
