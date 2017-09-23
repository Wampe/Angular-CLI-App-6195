import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SampleModule } from '@wampe/lib-6195';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		BrowserModule,
		SampleModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
