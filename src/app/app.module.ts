import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MedecinModule } from './modules/medecin/medecin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // angular
    BrowserModule,

    // app
    AppRoutingModule,

    // core & shared
    SharedModule,
    BrowserAnimationsModule,
    MedecinModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
