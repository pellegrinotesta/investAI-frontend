import { NgTemplateOutlet } from "@angular/common";
import { Component, OnInit, inject, output } from "@angular/core";
import { Router, RouterLinkActive } from "@angular/router";
import { MENU_ITEMS } from "../../constants/menu-items.constants";
import { MenuItem } from "../../models/menu-item.model";
import { SharedModule } from "../../shared.module";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { AuthFacadeService } from "../../services/auth/auth-facade.service";
import { take } from "rxjs";
import { AuthenticatedUser } from "../../models/authenticated-user.model";

@Component({
    selector: 'app-menu',
    imports: [
        SharedModule,
        MatExpansionModule,
        NgTemplateOutlet,
        MatListModule,
        RouterLinkActive
    ],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})
export class MenuComponent {

  readonly router = inject(Router);
  readonly authFacadeService = inject(AuthFacadeService);

  currentUser: AuthenticatedUser | undefined;
  showSetting: boolean = false;
  toggleSidenav = output<void>();
  menuItems: MenuItem[] = MENU_ITEMS;
  expandedPanel = 0;

  ngOnInit(): void {
    this.authFacadeService
    .getUser()
    .pipe(take(1))
    .subscribe((user) => {
      this.currentUser = user;
    });
  }

  onNavigate(route: string): void {
    this.toggleSidenav.emit();
    this.router.navigate([route]);
  }

  calculateExpandedPanel(): void {
    const currentUrl = this.router.url.slice(1);
    this.expandedPanel = this.menuItems
      .filter((item) => item.subMenu !== undefined)
      .findIndex((item: MenuItem) => {
        return item.subMenu?.some((subItem) => subItem.link === currentUrl);
      });
  }

}
