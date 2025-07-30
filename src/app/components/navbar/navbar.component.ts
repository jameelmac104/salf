import { Component } from '@angular/core';
import { NavigationPath } from '../../navigation-path';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  navigationPath = NavigationPath

}
