import {ApplicationConfig, importProvidersFrom, Injectable, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpContextToken,
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptor,
  HttpRequest,
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {TranslateCompiler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const reqWithHeader = req.clone({
    headers: req.headers.set('X-New-Header', 'new header value'),
  });

  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'returned a response with status', event.status);
    }
  }));
}

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  // Inject the current `AuthService` and use it to get an authentication token:
  const authToken = '';//inject(AuthService).getAuthToken();
  // Clone the request to add the authentication header.
  const newReq = req.clone({headers: req.headers.append('X-Authentication-Token', authToken)});
  return next(newReq);
}

export const CACHING_ENABLED = new HttpContextToken<boolean>(() => true);

export function cachingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  if (req.context.get(CACHING_ENABLED)) {
    // apply caching logic
    return next(req);
  } else {
    // caching has been disabled for this request
    return next(req);
  }
}

@Injectable()
class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request URL: ' + req.url);
    return handler.handle(req);
  }
}

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([loggingInterceptor, cachingInterceptor]),
      // DI-based interceptors must be explicitly enabled.
      withInterceptorsFromDi(),
    ),
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        //useClass: StaticTranslationLoader,
        deps: [HttpClient],
      },
      // compiler configuration
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      },
    })]),
    provideAnimationsAsync(),
  ]
};
