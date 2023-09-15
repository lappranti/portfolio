import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isMobileLayout!: boolean;
  visibilityModal: boolean = false;

  isCopied: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isMobileLayout = window.innerWidth <= 400 ? true : false;
    this.getWindowSize();

    let btn: any = document.getElementById('submitBtn');
    btn.style.alignSelf = 'flex-start';

    btn?.addEventListener('mouseenter', () => {
      btn.style.alignSelf =
        btn.style.alignSelf == 'flex-start' ? 'flex-end' : 'flex-start';
    });
  }
  onSubmit(data: NgForm) {
    this.visibilityModal = !this.visibilityModal;
    setTimeout(() => {
      this.visibilityModal = !this.visibilityModal;
      // Revenir en haut de la page
      window.scrollTo(0, 0);
    }, 3000);
  }

  getWindowSize() {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 400) {
        this.isMobileLayout = true;
      }
    });
  }
}
