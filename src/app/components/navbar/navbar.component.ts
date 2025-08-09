import { Component, computed, signal } from '@angular/core';
import { NavigationPath } from '../../navigation-path';
import { endpoints } from '../../../assets/constants/endpoint';
import { servicesList } from '../../pages/firm-service/service.data';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  navigationPath = endpoints;
  servicesList = servicesList;
  currentPath = signal<string>('');
  activeLink = computed(() => this.currentPath());

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentPath.set(event.urlAfterRedirects);
      });
  }
  
  isAnyServiceActive() {
    return this.servicesList.some(res => this.activeLink().endsWith(res.key));
  }

}
