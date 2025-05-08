import { Component } from '@angular/core';
import { DropdownFilterService } from '../../services/dropdown-filter.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dropdown-filter',
    imports: [CommonModule],
    templateUrl: './dropdown-filter.component.html',
    styleUrl: './dropdown-filter.component.scss'
})
export class DropdownFilterComponent {
  isDropdownOpen = false;
  filtersCount = 0;

  constructor(private dropdownService: DropdownFilterService) {
    this.dropdownService.dropdownOpen$.subscribe(isOpen => {
      this.isDropdownOpen = isOpen;
    });

    this.dropdownService.filtersCount$.subscribe(count => {
      this.filtersCount = count;
    });
  }

  toggleDropdown(): void {
    this.dropdownService.toggleDropdown();
  }

}
