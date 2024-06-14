import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/header.component';
import { HomeworkTwoComponent } from './app/homework-two/homework-two.component';



platformBrowserDynamic().bootstrapModule(AppModule) .catch(err => console.error(err));
bootstrapApplication(HeaderComponent);
bootstrapApplication(HomeworkTwoComponent)

