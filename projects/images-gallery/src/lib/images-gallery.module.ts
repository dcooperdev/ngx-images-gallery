import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { ImagesGalleryComponent } from './components/images-gallery/images-gallery.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageAspectDirective } from './directives/image-aspect.directive';
import { GetMaxThumbnailNavbarPipe } from './pipes/get-max-thumbnail-navbar.pipe';
import { NavigationComponent } from './components/navigation/navigation.component'

@NgModule({
  declarations: [
    ImagesGalleryComponent,
    NavbarComponent,
    GetMaxThumbnailNavbarPipe,
    ImageAspectDirective,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [ImagesGalleryComponent, NavbarComponent]
})
export class ImagesGalleryModule { }
