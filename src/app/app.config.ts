import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors, withXsrfConfiguration} from "@angular/common/http";
import {authExpired} from "./core/auth/auth-expired.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(
      withInterceptors([authExpired]),
      withXsrfConfiguration(
        {cookieName: "XSRF-TOKEN", headerName: "X-XSRF-TOKEN"}),
    ),
    provideRouter(routes)]
};
