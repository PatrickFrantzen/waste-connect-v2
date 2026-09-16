import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CustomPaginator } from './app/angular-paginatorConfig';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ErrorInterceptor } from './app/shared/interceptors/error-interceptor';
import { SuccessInterceptor } from './app/shared/interceptors/success-interceptor';
import { TokenInterceptor } from './app/shared/interceptors/token-interceptor';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
    ),
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SuccessInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MatPaginatorIntl, useValue: CustomPaginator() },
    {provide: LOCALE_ID, useValue: 'de-DE'},
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    provideHttpClient(withInterceptorsFromDi()),

    provideAnimations(),
  ],
}).catch((err) => console.error(err));
