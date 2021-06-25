import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainLayoutModule} from "./main-layout/main-layout.module";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainLayoutModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      loadChildren: () => import('./demo-form-page/demo-form-page.module').then(m => m.DemoFormPageModule)
    }], {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
