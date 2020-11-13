import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'imagesGalleryTest';

  public elements: any[] = [
    {
      name: 'test',
      url: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      name: 'test',
      url: 'https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'test',
      url: 'https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'test',
      url: 'https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'test',
      url: 'https://static.addtoany.com/images/dracaena-cinnabari.jpg'
    },
    {
      name: 'test',
      url: 'https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg'
    },
    {
      name: 'test',
      url: 'https://www.pics4learning.com/images/pics-banner1-1300.jpg'
    },
    {
      name: 'test',
      url: 'https://www.imagescanada.ca/wp-content/uploads/2019/03/Spectacular-Photos-of-Niagara-Falls-Casinos.jpg'
    },
    
  ]

  public elements5: any[] = [
    {
      name: 'test',
      url: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      name: 'test',
      url: 'https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'test',
      url: 'https://images.pexels.com/photos/38537/woodland-road-falling-leaf-natural-38537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'test',
      url: 'https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name: 'test',
      url: 'https://static.addtoany.com/images/dracaena-cinnabari.jpg'
    },
   
  ]

  public horizontal = true;
  public selectedImage = this.elements[0];
}
