import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    // - Provide HTTP module/providers in the app config using `provideHttpClient()`
    //after provideHttpClient, you can use Http service
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};


// ## Making HTTP calls with Angular Services

// - Provide HTTP module/providers in the app config using `provideHttpClient()`
// - Inject the `HttpClient` service
// - Use the `http` methods