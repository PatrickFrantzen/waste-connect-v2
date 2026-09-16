// import { HttpInterceptorFn } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { Store } from '@ngxs/store';
// import { catchError, throwError } from 'rxjs';
// // import { AuthActions } from '../../components/auth/state/auth.actions';

// export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
//   const store = inject(Store);
//   const fakeToken = 'fakeToken';
//   localStorage.setItem('token', fakeToken);
//   const token = localStorage.getItem('token');
//   if (token) {
//     req = req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   }
//   return next(req).pipe(
//     catchError((error) => {
//       if (error.status === 401) {
//         // Token expired or invalid, log out user
//         store.dispatch(new AuthActions.Logout());
//       }
//       return throwError(error);
//     })
//   );
// };
