import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LightboxCoordinatorService } from '../../services/lightbox-coordinator.service';
import { StatusCoordinatorService } from '../../services/status-coordinator.service';

@Component({
  selector: 'ngx-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() lightbox: boolean = false;

  private left: string = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik03LjcwMSwxNC4yNzZsOS41ODYtOS41ODVjMC44NzktMC44NzgsMi4zMTctMC44NzgsMy4xOTUsMGwwLjgwMSwwLjhjMC44NzgsMC44NzcsMC44NzgsMi4zMTYsMCwzLjE5NCAgTDEzLjk2OCwxNmw3LjMxNSw3LjMxNWMwLjg3OCwwLjg3OCwwLjg3OCwyLjMxNywwLDMuMTk0bC0wLjgwMSwwLjhjLTAuODc4LDAuODc5LTIuMzE2LDAuODc5LTMuMTk1LDBsLTkuNTg2LTkuNTg3ICBDNy4yMjksMTcuMjUyLDcuMDIsMTYuNjIsNy4wNTQsMTZDNy4wMiwxNS4zOCw3LjIyOSwxNC43NDgsNy43MDEsMTQuMjc2eiIgZmlsbD0iIzUxNTE1MSIvPjwvc3ZnPg==';
  private right: string = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yOTEsMTQuMjc2TDE0LjcwNSw0LjY5Yy0wLjg3OC0wLjg3OC0yLjMxNy0wLjg3OC0zLjE5NSwwbC0wLjgsMC44Yy0wLjg3OCwwLjg3Ny0wLjg3OCwyLjMxNiwwLDMuMTk0ICBMMTguMDI0LDE2bC03LjMxNSw3LjMxNWMtMC44NzgsMC44NzgtMC44NzgsMi4zMTcsMCwzLjE5NGwwLjgsMC44YzAuODc4LDAuODc5LDIuMzE3LDAuODc5LDMuMTk1LDBsOS41ODYtOS41ODcgIGMwLjQ3Mi0wLjQ3MSwwLjY4Mi0xLjEwMywwLjY0Ny0xLjcyM0MyNC45NzMsMTUuMzgsMjQuNzYzLDE0Ljc0OCwyNC4yOTEsMTQuMjc2eiIgZmlsbD0iIzUxNTE1MSIvPjwvc3ZnPg==';

  leftArrow: SafeResourceUrl;
  rightArrow: SafeResourceUrl;
  constructor(
    private sanitizer: DomSanitizer,
    private imageCoordinator: StatusCoordinatorService,
    private lightboxCoordinator: LightboxCoordinatorService) {
    this.leftArrow = this.sanitizer.bypassSecurityTrustResourceUrl(this.left);
    this.rightArrow = this.sanitizer.bypassSecurityTrustResourceUrl(this.right);
  }

  ngOnInit(): void {
  }

  next() {
    this.imageCoordinator.nextImage()
  }

  previous() {
    this.imageCoordinator.previousImage()
  }

  close() {
    this.lightboxCoordinator.toggle(false)
  }

}
