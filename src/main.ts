import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header.component';
import { HomeworkTwoComponent } from './app/homework-two/homework-two.component';
import { ButtonUDComponent } from './app/button-ud/button-ud.component';



platformBrowserDynamic().bootstrapModule(AppModule) .catch(err => console.error(err));
// bootstrapApplication(HomeworkTwoComponent);
bootstrapApplication(HeaderComponent);

