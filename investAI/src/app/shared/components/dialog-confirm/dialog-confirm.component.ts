import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

interface DialogData {
  msg: string;
}

@Component({
    selector: 'app-dialog-confirm',
    imports: [MatDialogModule, MatButtonModule],
    templateUrl: './dialog-confirm.component.html',
    styleUrl: './dialog-confirm.component.scss'
})
export class DialogConfirmComponent {

  readonly dialogRef = inject(MatDialogRef<DialogConfirmComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

}
