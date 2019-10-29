import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectsModule } from './projects/projects.module';
import { LayoutsModule } from './components/common/layouts/layouts.module';
import { UserClient, API_BASE_URL } from 'services/Api';
import { LoginService } from './login/login.service';
import { environment as ENV } from '../environments/environment';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutsModule,
    ProjectsModule
  ],
  providers: [
    //ProjectClient,
    UserClient,
    LoginService,
    { provide: API_BASE_URL, useValue: ENV.API_BASE_URL },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
