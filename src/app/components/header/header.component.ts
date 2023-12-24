import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;

  constructor(private router: Router, private el: ElementRef) {}
  ngOnInit(): void {
    window.addEventListener('click', this.handleDocumentClick.bind(this));
  }

  handleDocumentClick(event: MouseEvent) {
    if (this.showMenu) {
      // Vérifie si le clic est en dehors du menu
      const menuElement = this.el.nativeElement.querySelector('.link');
      const btnToggleMenu = document.querySelector('.menu-burger');

      if (
        menuElement &&
        !menuElement.contains(event.target as Node) &&
        event.target != btnToggleMenu &&
        !this.isChildOf(event.target, btnToggleMenu)
      ) {
        this.showMenu = false; // Masque le menu
      }
    }
  }

  isChildOf(child: any, parent: any) {
    let currentNode = child.parentNode;

    while (currentNode) {
      if (currentNode == parent) {
        return true;
      }
      currentNode = currentNode.parentNode;
    }

    return false;
  }

  handleToggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
