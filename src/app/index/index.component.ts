import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  showGoToTopButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Afficher ou masquer le bouton en fonction de la position de défilement
    this.showGoToTopButton = window.scrollY > 100; // par exemple, à partir de 100 pixels de défilement
  }

  scrollToTop() {
    // Faire défiler la page vers le haut de manière fluide
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
