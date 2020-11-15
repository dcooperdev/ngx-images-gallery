import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser'
import { ImagesGalleryComponent } from './components/images-gallery/images-gallery.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageAspectDirective } from './directives/image-aspect.directive';
import { GetMaxThumbnailNavbarPipe } from './pipes/get-max-thumbnail-navbar.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';

import * as Hammer from 'hammerjs';
import { ImgIsLoadingDirective } from './directives/img-is-loading.directive';

@Injectable() 
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    ImagesGalleryComponent,
    NavbarComponent,
    GetMaxThumbnailNavbarPipe,
    ImageAspectDirective,
    NavigationComponent,
    ImgIsLoadingDirective,
  ],
  imports: [
    BrowserModule,
    HammerModule 
  ],
  exports: [ImagesGalleryComponent, NavbarComponent],
  providers: [ 
    { 
      provide: HAMMER_GESTURE_CONFIG, 
      useClass: MyHammerConfig, 
    }, 
  ],
})
export class ImagesGalleryModule { }
