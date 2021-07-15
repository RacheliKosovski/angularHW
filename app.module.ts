import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathComponent } from './math/math.component';
import { EnglishComponent } from './english/english.component';

@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    EnglishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
