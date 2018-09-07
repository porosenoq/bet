import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlipComponent } from './slip/slip.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    NavbarComponent,
    SlipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
