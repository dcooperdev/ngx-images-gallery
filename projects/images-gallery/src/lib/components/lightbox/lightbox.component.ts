import { Component, OnInit } from '@angular/core';
import { Image } from '../../interfaces';
import { LightboxCoordinatorService } from '../../services/lightbox-coordinator.service';
import { StatusCoordinatorService } from '../../services/status-coordinator.service';

@Component({
  selector: 'ngx-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

  public selectedImage: Image;
  public status: boolean;

  constructor(private imageCoordinator: StatusCoordinatorService, private lightboxCoordinator: LightboxCoordinatorService) {
    imageCoordinator.getSelectedImage().subscribe(img => {
      this.selectedImage = img;
    })

    lightboxCoordinator.lightboxStatus.subscribe((status: boolean) => {
      this.status = status;
    })
  }

  ngOnInit(): void {
  }

  onSwipeLeft(e) {
    this.imageCoordinator.nextImage()
  }
  onSwipeRight(e) {
    this.imageCoordinator.previousImage()
  }

  closeLightbox() {
    this.lightboxCoordinator.toggle(false);
  }
}
