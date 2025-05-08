import { Component, Input, OnChanges, output, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { SavedFilterService } from '../../services/saved-filter.service';

@Component({
    selector: 'app-search-input',
    imports: [MatFormFieldModule, TranslateModule, ReactiveFormsModule, MatInput],
    templateUrl: './search-input.component.html',
    styleUrl: './search-input.component.scss'
})
export class SearchInputComponent implements OnChanges {

  @Input() disabled: boolean = true;

  @Input() set value(value: string) {
    this.searchInput.setValue(value);
  }
  
  search = output<string>();
  searchInput: FormControl = new FormControl('');

  constructor() {
    this.searchInput.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      //filter((value) => value && value.trim().length > 0)
    ).subscribe((value) => {
      this.search.emit(value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['disabled']?.currentValue) {
      this.searchInput.setValue('');
      this.searchInput.disable();
    }
    else
      this.searchInput.enable();
  }

}
