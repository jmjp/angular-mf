import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class AppModule { 

  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const elem = createCustomElement(AppComponent,{injector: this.injector});
    customElements.define('pokemon-component',elem);
  }
}
