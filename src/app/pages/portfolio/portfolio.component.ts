import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  windowSize!: number;

  listProject: Array<any> = [
    {
      title: 'Manage',
      description:
        'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
      link: 'manage',
      imgUrl: './assets/portfolio/desktop/image-portfolio-manage@2x.jpg'
    },
    {
      title: 'Countries API',
      description: `Ce projet est une application Angular interactive qui utilise l'API Rest Countries pour afficher des informations détaillées sur les pays du monde. Explorez les données en temps réel sur les pays, tels que leur population et bien plus encore.`,
      link: 'contries',
      imgUrl: './assets/portfolio/desktop/desktop-design-home-dark.jpg'
    },
    {
      title: 'Galleria Slideshow',
      description:
        'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
      link: 'galleria',
      imgUrl: './assets/portfolio/desktop/preview-galleria-slideshow.jpg'
    },
    {
      title: 'Bookmark',
      description:
        'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
      link: 'bookmark',
      imgUrl: './assets/portfolio/desktop/image-portfolio-bookmark@2x.jpg'
    },
    {
      title: 'Flashcards',
      description:
        'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
      link: 'flashcards',
      imgUrl: './assets/portfolio/desktop/flashcard-preview-desktop.png.jpg'
    },
    {
      title: 'Insure',
      description:
        'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
      link: 'insure',
      imgUrl: './assets/portfolio/desktop/image-portfolio-insure@2x.jpg'
    },
    {
      title: 'Dictionnary App',
      description:
        'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
      link: 'dictionnary',
      imgUrl: './assets/portfolio/desktop/preview-dictionnary-web-app.jpg'
    },
    {
      title: 'Fylo',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      link: 'fylo',
      imgUrl: './assets/portfolio/desktop/image-portfolio-fylo@2x.jpg'
    },
    {
      title: 'Memory Game',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      link: 'memory-game',
      imgUrl: './assets/portfolio/desktop/preview-memory-game.jpg'
    },
    {
      title: 'Tic Tac Toe',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      link: 'tic-tac-toe-game',
      imgUrl: './assets/portfolio/desktop/preview-tic-tac-toe.jpg'
    },
    {
      title: 'GitHub user search',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      link: 'gitHub-search',
      imgUrl: './assets/portfolio/desktop/gitHub-search-preview.jpg'
    },
    {
      title: 'Planets',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      link: 'planets',
      imgUrl: './assets/portfolio/desktop/preview-planets-fact-site.jpg'
    },
    {
      title: 'Age Caulculator',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      link: 'age-calculator',
      imgUrl: './assets/portfolio/desktop/desktop-design.jpg'
    },
    {
      title: 'Caulculator App',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      link: 'calculator-app',
      imgUrl: './assets/portfolio/desktop/desktop-preview-caulculator.jpg'
    }
  ];

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.windowSize = window.innerWidth;
    this.getWindowWidth();
  }

  getWindowWidth() {
    window.addEventListener('resize', () => {
      this.windowSize = window.innerWidth;
    });
  }

  handleGotoDetailProject(project: string) {
    this.router.navigate(['portfolio/', project]);
  }
}
