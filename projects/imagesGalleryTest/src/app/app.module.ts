import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImagesGalleryModule } from 'images-gallery';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImagesGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
