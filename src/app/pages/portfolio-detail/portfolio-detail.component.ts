import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  listProject: Array<any> = [
    {
      title: 'Manage',
      id: 'manage',
      description:
        'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS flexbox and JavaScript for the areas that required interactivity, such as the testimonial slider.',
      link: 'https://lappranti.github.io/manage-landing-page/',
      staticImg: [
        './assets/detail/desktop/image-manage-preview-1@2x.jpg',
        './assets/detail/desktop/image-manage-preview-2@2x.jpg'
      ],
      imgHero: './assets/detail/desktop/image-manage-hero@2x.jpg',
      technos: ['HTML', 'SCSS', 'JS']
    },
    {
      title: 'Countries API',
      id: 'contries',
      description:
        'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
      link: 'https://lappranti.github.io/rest-countries-api/',
      staticImg: [
        './assets/detail/desktop/desktop-preview-contries-app.jpg',
        './assets/detail/desktop/image-contries-preview-1@2x.jpg'
      ],
      imgHero: './assets/detail/desktop/desktop-preview-contries-app.jpg',
      technos: ['HTML', 'SCSS', 'JS']
    },
    {
      title: 'Galleria Slideshow',
      id: 'galleria',
      description:
        'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
      link: 'https://lappranti.github.io/galleria-slideshow-site/',
      staticImg: [
        './assets/detail/desktop/preview-galleria-slideshow.jpg',
        './assets/detail/desktop/galleria-mobile-preview.png'
      ],
      imgHero: './assets/detail/desktop/preview-galleria-slideshow.jpg',
      technos: ['HTML', 'SCSS', 'JS']
    },
    {
      title: 'Bookmark',
      id: 'bookmark',
      description:
        'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
      link: 'https://lappranti.github.io/bookmark-landing-page/',
      staticImg: [
        './assets/detail/desktop/image-bookmark-preview-1@2x.jpg',
        './assets/detail/desktop/image-bookmark-preview-2@2x.jpg'
      ],
      imgHero: './assets/detail/desktop/image-bookmark-hero@2x.jpg',
      technos: ['HTML', 'SCSS', 'JS']
    },
    {
      title: 'Flashcards',
      id: 'flashcards',
      description:
        'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
      link: 'https://lappranti.github.io/flashcards/',
      staticImg: [
        './assets/detail/desktop/flashcard-preview1.jpg',
        './assets/detail/desktop/flashcard-preview2.jpg'
      ],
      imgHero: './assets/detail/desktop/flashcard-preview-desktop.png.jpg',
      technos: ['HTML', 'SCSS', 'JS']
    },
    {
      title: 'Insure',
      id: 'insure',
      description:
        'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
      link: 'https://lappranti.github.io/insure-landing-page/',
      staticImg: [
        './assets/detail/desktop/image-insure-preview-1@2x.jpg',
        './assets/detail/desktop/image-insure-preview-2@2x.jpg'
      ],
      imgHero: './assets/detail/desktop/image-insure-hero@2x.jpg',
      technos: ['HTML', 'SCSS', 'JS']
    },
    {
      title: 'Dictionnary App',
      id: 'dictionnary',
      description:
        'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
      link: 'https://lappranti.github.io/Dictionnaire-app/',
      staticImg: [
        './assets/detail/desktop/preview-dictionnary-web-app.jpg',
        './assets/detail/desktop/dictionnary-mobile-preview.png'
      ],
      imgHero: './assets/detail/desktop/preview-dictionnary-web-app.jpg',
      technos: ['HTML', 'SCSS', 'JS']
    },
    {
      title: 'Fylo',
      id: 'fylo',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      link: 'https://lappranti.github.io/fylo-dark-theme-landing-page/',
      staticImg: [
        './assets/detail/desktop/image-fylo-preview-1@2x.jpg',
        './assets/detail/desktop/image-fylo-preview-2@2x.jpg'
      ],
      imgHero: './assets/detail/desktop/image-fylo-hero@2x.jpg',
      technos: ['HTML', 'SCSS', 'JS']
    },
    {
      title: 'Memory Game',
      id: 'memory-game',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      link: 'https://lappranti.github.io/fylo-dark-theme-landing-page/',
      staticImg: [
        './assets/detail/desktop/preview-memory-game.jpg',
        './assets/detail/desktop/memory-game-mobile-preview.png'
      ],
      imgHero: './assets/detail/desktop/preview-memory-game.jpg',
      technos: ['HTML', 'SCSS', 'JS']
    },
    {
      title: 'Tic Tac Toe',
      id: 'tic-tac-toe',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      link: 'https://lappranti.github.io/tictoctoe/menu',
      staticImg: [
        './assets/detail/desktop/preview-tic-tac-toe.jpg',
        './assets/detail/desktop/memory-game-mobile-preview.png'
      ],
      imgHero: './assets/detail/desktop/preview-tic-tac-toe.jpg',
      technos: ['HTML', 'SCSS', 'JS']
    },
    {
      title: 'GitHub user search',
      id: 'gitHub-search',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      link: 'https://lappranti.github.io/github-user-search-app/',
      staticImg: [
        './assets/detail/desktop/gitHub-search-preview.jpg',
        './assets/detail/desktop/github-search-preview-mobile.png'
      ],
      imgHero: './assets/detail/desktop/gitHub-search-preview.jpg',
      technos: ['HTML', 'SCSS', 'JS']
    },
    {
      title: 'Planets fact site',
      id: 'planets',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      link: 'https://lappranti.github.io/planets-fact-site/',
      staticImg: [
        './assets/detail/desktop/preview-planets-fact-site.jpg',
        './assets/detail/desktop/planets-fact-site-preview-mobile.jpg'
      ],
      imgHero: './assets/detail/desktop/preview-planets-fact-site.jpg',
      technos: ['HTML', 'SCSS', 'JS']
    },
    {
      title: 'Caulculator App',
      id: 'calculator-app',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      link: 'https://lappranti.github.io/mini-caculator-app/',
      staticImg: [
        './assets/detail/desktop/desktop-design-theme-3.jpg',
        './assets/detail/desktop/desktop-design-theme-mobile.jpg'
      ],
      imgHero: './assets/detail/desktop/desktop-preview-caulculator.jpg',
      technos: ['HTML', 'SCSS', 'JS']
    },
    {
      title: 'Age Caulculator',
      id: 'age-calculator',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      link: 'https://lappranti.github.io/age-calculator-app/',
      staticImg: [
        './assets/detail/desktop/desktop-preview.jpg',
        './assets/detail/desktop/age-calculator-preview-mobile.jpg'
      ],
      imgHero: './assets/detail/desktop/desktop-completed.jpg',
      technos: ['HTML', 'SCSS', 'JS']
    }
  ];

  currentProjet!: any;
  currentStaticPrieviewImage!: string;

  nextProject!: any;
  prevProject!: any;

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.getCurrentProject();
    let btnShowLayouts: any = document.querySelectorAll('.btn-layout');
    btnShowLayouts[0].classList.add('active');
    this.toggleLayout();
  }

  toggleLayout() {
    let btnShowLayouts: any = document.querySelectorAll('.btn-layout');
    btnShowLayouts.forEach((btn: any) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) {
          return;
        } else {
          let currentBtnActive = document.querySelector('button.active');

          currentBtnActive?.classList.remove('active');
          btn.classList.add('active');
          if (btn.classList.contains('mobile')) {
            this.currentStaticPrieviewImage = this.currentProjet.staticImg[1];
          } else {
            this.currentStaticPrieviewImage = this.currentProjet.staticImg[0];
          }
        }
      });
    });
  }

  getCurrentProject() {
    let currentProjetName: String | null = this.activatedRoute.snapshot.paramMap.get(
      'id'
    );

    if (currentProjetName) {
      this.listProject.forEach(projet => {
        if (projet.id === currentProjetName) {
          this.currentProjet = projet;
          this.currentStaticPrieviewImage = this.currentProjet.staticImg[0];
        }
      });

      console.log(this.currentProjet);
      this.initializationPrevAndNext(this.currentProjet);
    }
  }

  initializationPrevAndNext(project: any) {
    let index = this.listProject.indexOf(project);

    this.currentStaticPrieviewImage = this.currentProjet.staticImg[0];
    let btnShowLayouts: any = document.querySelectorAll('.btn-layout');
    document.querySelector('.active')?.classList.remove('active');
    btnShowLayouts[0].classList.add('active');

    if (index == 0) {
      this.nextProject = this.listProject[index + 1];
      this.prevProject = this.listProject[this.listProject.length - 1];
    } else if (index == this.listProject.length - 1) {
      this.prevProject = this.listProject[index - 1];
      this.nextProject = this.listProject[0];
    } else {
      this.prevProject = this.listProject[index - 1];
      this.nextProject = this.listProject[index + 1];
    }
  }

  handleSowNextProject() {
    this.currentProjet = this.nextProject;
    this.initializationPrevAndNext(this.currentProjet);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  handleShowPrevProject() {
    this.currentProjet = this.prevProject;
    this.initializationPrevAndNext(this.currentProjet);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
