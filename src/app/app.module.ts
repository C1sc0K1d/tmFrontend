import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserTransfComponent } from './user-transf/user-transf.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [			
      AppComponent,
      NavComponent,
      NotFoundComponent
   ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
