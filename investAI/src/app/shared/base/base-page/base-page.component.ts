import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject, Subscription } from "rxjs";
import { LoaderService } from "../../services/loader.service";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-base-page',
    template: `
      <p>
        base works!
      </p>
    `,
    standalone: false
})
export abstract class BasePageComponent implements OnInit, OnDestroy {

    onDestroy$: Subject<any> = new Subject<any>();
    isLoading: boolean = false;
    loaderSubscription: Subscription | undefined;
    isReady: boolean = false;
    
    protected readonly cdRef = inject(ChangeDetectorRef);
    protected readonly loader = inject(LoaderService);
    protected readonly toastr = inject(ToastrService);
    protected readonly activatedRoute = inject(ActivatedRoute);
   
    constructor() {        
      this.loader.isLoading().subscribe(isLoading => this.isLoading = isLoading);
    }

    ngOnInit(): void {
   
    }

    showSuccessMessage(): void {
      const title = 'OPERATION SUCCESSFUL';
      const message = 'The operation was successful';
      this.toastr.success(title, message);
    }
  
    showErrorMessage(): void {
      const title = 'Errore';
      const message = 'L\'operazione non è andata a buon fine';
      this.toastr.error(title, message);
    }


    ngOnDestroy() {
      this.onDestroy$.next(true);
      this.loaderSubscription?.unsubscribe();
    }
}