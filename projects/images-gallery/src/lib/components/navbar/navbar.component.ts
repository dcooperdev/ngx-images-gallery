import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Image } from '../../interfaces';
import { NavbarCoordinatorService } from '../../services/navbar-coordinator.service';
import { StatusCoordinatorService } from '../../services/status-coordinator.service';

@Component({
  selector: 'ngx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbar') elementView: ElementRef;

  @Input() imageWidth: string;
  @Input() imageHeight: string;
  @Input() images: Image[] = [];
  @Input() maxImages: number;
  @Input() hideOnMobile: boolean = false;

  public selected: Image;
  public horizontal: boolean = false;

  constructor(private navbar: NavbarCoordinatorService, private imageCoordinator: StatusCoordinatorService) {
    navbar.navbarOrientation.subscribe(orientation => {
      this.horizontal = orientation;
    })
    imageCoordinator.getSelectedImage().subscribe(img => {
      this.selected = img;
    })
  }

  ngOnInit(): void {
    this.imageCoordinator.setImages(this.images);
  }

  selecImage(e) {
    this.imageCoordinator.setSelectedImage(e);
  }
}
