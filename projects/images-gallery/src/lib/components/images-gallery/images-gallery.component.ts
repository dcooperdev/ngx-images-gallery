import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../interfaces';
import { NavbarCoordinatorService } from '../../services/navbar-coordinator.service';
import { StatusCoordinatorService } from '../../services/status-coordinator.service';

@Component({
  selector: 'ngx-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})

export class ImagesGalleryComponent implements OnInit {
  @Input() navbarOrientation: boolean;
  @Input() selectedImage: Image;

  constructor(private navbar: NavbarCoordinatorService, private imageCoordinator: StatusCoordinatorService) {
    imageCoordinator.getSelectedImage().subscribe(img => {
      this.selectedImage = img;
    })
  }

  ngOnInit(): void {
    this.navbar.setStatus(this.navbarOrientation);
  }
}
