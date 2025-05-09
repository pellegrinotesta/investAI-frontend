import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { MatDrawer, MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../../shared/shared.module';
import { MenuComponent } from '../../shared/components/menu/menu.component';
import { BasePageComponent } from '../../shared/base/base-page/base-page.component';
import { MENU_ITEMS } from '../../shared/constants/menu-items.constants';
import { MenuItem } from '../../shared/models/menu-item.model';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Memoize } from 'typescript-memoize';


@Component({
  selector: 'app-homepage',
  imports: [
    SharedModule,
    RouterOutlet,
    MatDrawerContainer,
    MatDrawer,
    FormsModule,
    MenuComponent,
    MatMenuModule,
    RouterLink,
    MatTooltipModule,
    MatSidenavModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent extends BasePageComponent {

  menuItems: MenuItem[] = MENU_ITEMS;
  expandedPanel = 0;
  etsiCredentialsExpired: any;

  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  override ngOnInit(): void {
    super.ngOnInit();
  }

  onLogout(): void {
    this.authService.logout();
  }

  @Memoize()
  calculateExpandedPanel(): void {
    const currentUrl = this.router.url.slice(1);
    this.expandedPanel = this.menuItems
      .filter((item) => item.subMenu !== undefined)
      .findIndex((item: MenuItem) => {
        return item.subMenu?.some((subItem) => subItem.link === currentUrl);
      });
  }

}


