import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarContainerComponent } from './components/navbar/navbar-container/navbar-container.component';
import { AuthService } from './components/auth/services/auth.service';
import { filter } from 'rxjs/operators';
import { UserInteraktionService } from './shared/services/user-interaktion.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [NavbarContainerComponent, RouterOutlet, FooterComponent]
})
export class AppComponent implements OnInit {
  title = 'waste-connect.de';
  nonRedirectRoutes = ['/login', '/signup', '/confirmEmail', '/resetpassword'];

  authService = inject(AuthService);
  userInteraktionService = inject(UserInteraktionService);
  router = inject(Router);

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        //Prüfen ob der User eingeloggt ist, Reroute wird nicht durchgeführt.
        this.authService.checkIfTokenIsValid();
        // const currentRoute = event.urlAfterRedirects;
        // const isNonRedirectRoute =
        //   this.nonRedirectRoutes.includes(currentRoute) ||
        //   currentRoute.startsWith('/inserat/') ||
        //   currentRoute.startsWith('/entsorger/') ||
        //   currentRoute.startsWith('/confirmEmail/')
        //   ;
        // if (!loggedIn && !isNonRedirectRoute) {
        //   this.router.navigate(['/']);
        // } 
      });

    this.userInteraktionService.scrollToTop();
  }
}
