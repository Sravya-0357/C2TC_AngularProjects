// src/main.server.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideServerRendering } from '@angular/platform-server';

export default async function bootstrap() {
  return bootstrapApplication(AppComponent, {
    providers: [provideServerRendering()]
  });
}
