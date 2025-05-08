import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit, output, ViewChild } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { Status } from '../../enums/status.enum';
import { TableAction } from '../../models/table-action.model';
import { Column } from '../../models/column.model';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { AuthService } from '../../services/auth/auth.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDivider } from '@angular/material/divider';

@Component({
    selector: 'app-table',
    imports: [
        MatTableModule,
        MatPaginatorModule,
        MatMenuModule,
        TranslateModule,
        CommonModule,
        MatButtonModule,
        MatSortModule,
        MatDivider
    ],
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss',
    animations: [
        trigger('detailExpand', [
            state('collapsed,void', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ]
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() dataSource: any;
  @Input() size: number | undefined = 0;
  @Input() totalElements: number | undefined = 0;
  @Input() actions: TableAction[] = [];
  @Input() columns: Column[] = [];
  @Input() loading: boolean = true;

  pageChanged = output<PageEvent>();
  pageSizeChanged = output<PageEvent>();
  clickEvent = output<{ action: TableAction, element: any }>();

  Status = Status;
  displayedColumns: string[] = [];
  displayedDetails: Column[] = [];

  expandedElement: any | null;

  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(authService: AuthService) {
   
  }

  ngOnInit(): void {
    this.displayedColumns = this.columns.filter(c => !c.detail).map(column => column.attributeName);
    this.displayedDetails = this.columns.filter(c => c.detail);
    if (this.actions.length > 0)
      this.displayedColumns.push('actions');
    if (this.displayedDetails.length > 0)
      this.displayedColumns.unshift('expand-detail');
  }

  ngAfterViewInit() {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  emitPageChange(event: PageEvent): void {
    this.loading = true;
    if (event.pageIndex !== event.previousPageIndex) {
      this.pageChanged.emit(event);
      this.loading = false;
    } else if (event.pageSize !== this.size) {
      this.pageSizeChanged.emit(event);
      this.loading = false;
    }
      
  }

  onAction(action: TableAction, element: any): void {
    this.clickEvent.emit({ action, element });
  }

  transformValue(value: any, pipeArgs: any): any {
    let transformedValue = pipeArgs(value);
    return transformedValue;
  }

  

}
