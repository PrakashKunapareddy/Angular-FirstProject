import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { LoserComponent } from './loser/loser.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { HomeworkComponent } from './homework/homework.component';
import { HomeworkTwoComponent } from './homework-two/homework-two.component';
import { HeaderComponent } from './header.component';
import { FormexampleComponent } from './login-page/formexample/formexample.component';
import { ButtonUDComponent } from './button-ud/button-ud.component';


@NgModule({
    declarations: [
        AppComponent,
        ServerComponent,
        ServersComponent,
        ErrorMessageComponent,
        SuccessMessageComponent,
        LoserComponent,
        LoginPageComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        UserComponent,
        HomeworkComponent,
        HomeworkTwoComponent,
        HeaderComponent,
        ButtonUDComponent,
        FormexampleComponent,

    ]
})
export class AppModule { }
