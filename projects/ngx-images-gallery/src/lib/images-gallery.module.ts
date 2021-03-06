import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser'
import { ImagesGalleryComponent } from './components/images-gallery/images-gallery.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageAspectDirective } from './directives/image-aspect.directive';
import { GetMaxThumbnailNavbarPipe } from './pipes/get-max-thumbnail-navbar.pipe';
import { NavigationComponent } from './components/navigation/navigation.component';

import * as Hammer from 'hammerjs';
import { ImgIsLoadingDirective } from './directives/img-is-loading.directive';
import { LightboxComponent } from './components/lightbox/lightbox.component';

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
    LightboxComponent,
  ],
  imports: [
    CommonModule,
    HammerModule 
  ],
  exports: [ImagesGalleryComponent, NavbarComponent, LightboxComponent, CommonModule, HammerModule ],
  providers: [ 
    { 
      provide: HAMMER_GESTURE_CONFIG, 
      useClass: MyHammerConfig, 
    }, 
  ],
})
export class ImagesGalleryModule { }
