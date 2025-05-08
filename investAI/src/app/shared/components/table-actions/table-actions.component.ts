import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { Role } from '../../enums/role.enum';


@Component({
    selector: 'app-table-actions',
    imports: [MatButtonModule, MatTooltipModule, CommonModule],
    templateUrl: './table-actions.component.html',
    styleUrl: './table-actions.component.scss'
})
export class TableActionsComponent {

  constructor(private dialog: MatDialog) {}

  @Input() isEtsi: boolean = false;

  export = output<string>();
  etsiCredentialsPermission = [Role.ADMIN];


}