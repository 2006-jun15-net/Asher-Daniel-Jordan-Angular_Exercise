import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SelectComponent } from './select/select.component';
import { HighlightComponent } from './highlight/highlight.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    HighlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
