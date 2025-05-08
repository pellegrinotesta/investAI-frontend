import { Component, output } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-advanced-filter-base',
    template: `
      <p>
        base works!
      </p>
    `,
    standalone: false
})
export abstract class AdvancedFilterBaseComponent<T> {

    filterChanged = output<T>();
    reset = output();
    form!: FormGroup;

    constructor() {
        this.form = this.createForm();
    }

    abstract createForm(): FormGroup;
    abstract onSearch(): void;

    onReset(): void {
      this.form.reset();
      this.reset.emit();
      this.filterChanged.emit(this.form.value as T);
    }
}