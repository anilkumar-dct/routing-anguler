import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const config: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding())], //for getting the data on based id
};
