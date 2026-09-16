import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard, authGuard } from './shared/guards/auth.guard';
import { editRouteGuard } from './shared/guards/edit-route.guard';


const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/main/main-container/main-container.component').then(
        (m) => m.MainContainerComponent
      ),
      resolve: {
        // landingPageData: landingPageResolver,
      }
  },
  {
    path: 'anbieten',
    loadComponent: () =>
      import(
        './components/landingpage/landingpage-anbieten/landingpage-anbieten.component'
      ).then((m) => m.LandingpageAnbietenComponent),
  },
  {
    path: 'edit',
    loadComponent: () =>
      import(
        './components/landingpage/landingpage-anbieten/landingpage-anbieten.component'
      ).then((m) => m.LandingpageAnbietenComponent),
    canActivate: [authGuard, editRouteGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'confirmEmail/:id',
    loadComponent: () =>
      import('./components/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./components/auth/signup/signup.component').then(
        (m) => m.SignupComponent
      ),
  },
  {
    path: 'resetpassword',
    loadComponent: () =>
      import('./components/auth/reset-password/reset-password.component').then(
        (m) => m.ResetPasswordComponent
      ),
  },
  {
    path: 'account',
    loadComponent: () =>
      import(
        './components/account/account-container/account-container.component'
      ).then((m) => m.AccountContainerComponent),
    canActivate: [authGuard],
  },
  {
    path: 'account/inserate',
    loadComponent: () =>
      import(
        './components/account/account-children/inserate/inserate-container'
      ).then((m) => m.InserateContainerComponent),
    canActivate: [authGuard],
  },
  {
    path: 'account/merkzettel',
    loadComponent: () =>
      import(
        './components/account/account-children/merkzettel/merkzettel-container'
      ).then((m) => m.MerkzettelContainerComponent),
    canActivate: [authGuard],
  },
  {
    path: 'account/messages',
    loadComponent: () =>
      import(
        './components/account/account-children/messages/messages-container'
      ).then((m) => m.MessagerContainerComponent),
    canActivate: [authGuard],
  },
  {
    path: 'account/einstellungen',
    loadComponent: () =>
      import(
        './components/account/account-children/einstellungen/einstellung-container'
      ).then((m) => m.EinstellungContainerComponent),
    canActivate: [authGuard],
    resolve: {
      // einstellung: einstellungResolver,
    }
  },
  {
    path: 'account/letzteSuche',
    loadComponent: () =>
      import(
        './components/account/account-children/letzte-suche/letzte-suche.component'
      ).then((m) => m.LetzteSucheComponent),
    canActivate: [authGuard],
  },

  {
    path: 'account/adminpanel',
    loadComponent: () =>
      import(
        './components/account/account-children/adminpanel/adminpanel.component'
      ).then((m) => m.AdminpanelComponent),
      canActivate: [authGuard, adminGuard],
  },
  {
    path: 'dsgvo',
    loadComponent: () =>
      import('./components/rechtliches/dsgvo/dsgvo.component').then(
        (m) => m.DsgvoComponent
      ),
  },
  {
    path: 'impressum',
    loadComponent: () =>
      import('./components/rechtliches/impressum/impressum.component').then(
        (m) => m.ImpressumComponent
      ),
  },
  {
    path: 'inserat/:id',
    loadComponent: () =>
      import(
        './components/inserat-summary/inserat-summary-container.component'
      ).then((m) => m.InseratSummaryContainerComponent),
  },
  {
    path: 'entsorger/:id',
    loadComponent: () =>
      import(
        './components/entsorger-summary/entsorger-summary-container.component'
      ).then((m) => m.EntsorgerSummaryContainerComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
