import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { AppBarComponent } from './app-bar/app-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpTestComponent,
    AppBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
