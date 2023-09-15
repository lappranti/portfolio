import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;
  constructor(private router: Router) {}
  ngOnInit(): void {}

  handleToggleMenu() {
    this.showMenu = !this.showMenu;
  }

  handleGoto(page: string) {
    this.router.navigate([page]);
  }

  handleCloseMenu() {
    this.showMenu = false;
  }
}
