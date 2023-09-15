import { Component, OnInit } from '@angular/core';

//import { gsap } from 'gsap';
//import { ScrollTrigger } from 'gsap/ScrollTrigger';

//gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  windowSize!: number;
  ngOnInit(): void {
    this.windowSize = window.innerWidth;
    this.getWindowWidth();

    // gsap.registerPlugin(ScrollTrigger);

    /* gsap.from('.el-animated', {
      y: 100,
      duration: 2,

      ease: 'bounce'
    });*/
  }

  getWindowWidth() {
    window.addEventListener('resize', () => {
      this.windowSize = window.innerWidth;
    });
  }

  scrollToSection() {
    const section = document.getElementById('about-me'); // Remplacez 'section-1' par l'ID de la section cible
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Utilisez 'auto' pour un défilement instantané
    }
  }
}
