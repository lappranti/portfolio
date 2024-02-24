import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private listProject: Array<any> = [
    {
      title: 'aAudiophile Ecommerce Website',
      description: `An e-commerce website for Audiophile entirely developed using Angular. This project represents a combination of my skills in web development, user interface design, and project management.`,
      id: 'audiophile-ecommerce-website',
      imgUrl: './assets/portfolio/desktop/preview-audiophile-ecommerce.jpg',
      link: 'https://audiophile-ecommerce-website-lappranti.vercel.app/',
      staticImg: [
        './assets/portfolio/desktop/preview-audiophile-ecommerce.jpg',
        './assets/portfolio/desktop/preview-audiophile-ecommerce-mobile.png',
      ],
      imgHero: './assets/portfolio/desktop/preview-audiophile-ecommerce.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'BMI Calculator',
      description:
        'This application is a Body Mass Index (BMI) calculator that helps you better understand your weight in relation to your height.',
      id: 'bmi-calculator',
      imgUrl: './assets/portfolio/desktop/preview-bmi-calculator.jpg',
      link: 'https://lappranti.github.io/bmi-calculator/',
      staticImg: [
        './assets/detail/desktop/preview-bmi-calculator.jpg',
        './assets/detail/desktop/preview-bmi-mobile.jpg',
      ],
      imgHero: './assets/portfolio/desktop/preview-bmi-calculator.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'Manage',
      description:
        'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
      id: 'manage',
      imgUrl: './assets/portfolio/desktop/image-portfolio-manage@2x.jpg',
      link: 'https://lappranti.github.io/manage-landing-page/',
      staticImg: [
        './assets/detail/desktop/image-manage-preview-1@2x.jpg',
        './assets/detail/desktop/image-manage-preview-2@2x.jpg',
      ],
      imgHero: './assets/detail/desktop/image-manage-hero@2x.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'Countries API',
      description:
        'This project is an interactive Angular application that utilizes the Rest Countries API to display detailed information about countries around the world. Explore real-time data about countries, including their population and much more.',
      id: 'contries',
      imgUrl: './assets/portfolio/desktop/desktop-design-home-dark.jpg',
      link: 'https://lappranti.github.io/rest-countries-api/',
      staticImg: [
        './assets/detail/desktop/desktop-preview-contries-app.jpg',
        './assets/detail/desktop/image-contries-preview-1@2x.jpg',
      ],
      imgHero: './assets/detail/desktop/desktop-preview-contries-app.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'Galleria Slideshow',
      description:
        'Galleria Slideshow is a web project that showcases a stunning collection of images through an immersive slideshow experience. Explore a captivating visual journey with our curated selection of photographs and artwork.',
      id: 'galleria',
      imgUrl: './assets/portfolio/desktop/preview-galleria-slideshow.jpg',
      link: 'https://lappranti.github.io/galleria-slideshow-site/',
      staticImg: [
        './assets/detail/desktop/preview-galleria-slideshow.jpg',
        './assets/detail/desktop/galleria-mobile-preview.png',
      ],
      imgHero: './assets/detail/desktop/preview-galleria-slideshow.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'Bookmark',
      description:
        'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
      id: 'bookmark',
      imgUrl: './assets/portfolio/desktop/image-portfolio-bookmark@2x.jpg',
      link: 'https://lappranti.github.io/bookmark-landing-page/',
      staticImg: [
        './assets/detail/desktop/image-bookmark-preview-1@2x.jpg',
        './assets/detail/desktop/image-bookmark-preview-2@2x.jpg',
      ],
      imgHero: './assets/detail/desktop/image-bookmark-hero@2x.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'Flashcards',
      description:
        'Flashcards is an interactive quiz application built with Angular. Test and reinforce your knowledge in various fields through engaging and informative quizzes.',
      id: 'flashcards',
      imgUrl: './assets/portfolio/desktop/flashcard-preview-desktop.png.jpg',
      link: 'https://lappranti.github.io/flashcards/',
      staticImg: [
        './assets/detail/desktop/flashcard-preview1.jpg',
        './assets/detail/desktop/flashcard-preview2.jpg',
      ],
      imgHero: './assets/detail/desktop/flashcard-preview-desktop.png.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'Insure',
      description:
        'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
      id: 'insure',
      imgUrl: './assets/portfolio/desktop/image-portfolio-insure@2x.jpg',
      link: 'https://lappranti.github.io/insure-landing-page/',
      staticImg: [
        './assets/detail/desktop/image-insure-preview-1@2x.jpg',
        './assets/detail/desktop/image-insure-preview-2@2x.jpg',
      ],
      imgHero: './assets/detail/desktop/image-insure-hero@2x.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'Dictionnary App',
      description:
        'Dictionnaire-app is a handy application that enables users to easily search for word definitions online.',
      id: 'dictionnary',
      imgUrl: './assets/portfolio/desktop/preview-dictionnary-web-app.jpg',
      link: 'https://lappranti.github.io/Dictionnaire-app/',
      staticImg: [
        './assets/detail/desktop/preview-dictionnary-web-app.jpg',
        './assets/detail/desktop/dictionnary-mobile-preview.png',
      ],
      imgHero: './assets/detail/desktop/preview-dictionnary-web-app.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'Fylo',
      description:
        'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      id: 'fylo',
      imgUrl: './assets/portfolio/desktop/image-portfolio-fylo@2x.jpg',
      link: 'https://lappranti.github.io/fylo-dark-theme-landing-page/',
      staticImg: [
        './assets/detail/desktop/image-fylo-preview-1@2x.jpg',
        './assets/detail/desktop/image-fylo-preview-2@2x.jpg',
      ],
      imgHero: './assets/detail/desktop/image-fylo-hero@2x.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'Memory Game',
      description: `Memory Game" is a captivating memory game with both single-player and multiplayer features. The game challenges players' concentration and memory abilities.`,
      id: 'memory-game',
      imgUrl: './assets/portfolio/desktop/preview-memory-game.jpg',
      link: 'https://lappranti.github.io/memory-game/',
      staticImg: [
        './assets/detail/desktop/preview-memory-game.jpg',
        './assets/detail/desktop/memory-game-mobile-preview.png',
      ],
      imgHero: './assets/detail/desktop/preview-memory-game.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'Tic Tac Toe',
      description:
        'Tic Tac Toe is a classic two-player board game. In our application, players can play against the computer or against another player on the same computer.',
      id: 'tic-tac-toe',
      imgUrl: './assets/portfolio/desktop/preview-tic-tac-toe.jpg',
      link: 'https://lappranti.github.io/tictoctoe/menu',
      staticImg: [
        './assets/detail/desktop/preview-tic-tac-toe.jpg',
        './assets/detail/desktop/memory-game-mobile-preview.png',
      ],
      imgHero: './assets/detail/desktop/preview-tic-tac-toe.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'GitHub user search',
      description:
        'Github user search-app is a small Angular application that allows you to search for GitHub users using the GitHub API. With a simple user interface, the application quickly provides information.',
      id: 'gitHub-search',
      imgUrl: './assets/portfolio/desktop/gitHub-search-preview.jpg',
      link: 'https://lappranti.github.io/github-user-search-app/',
      staticImg: [
        './assets/detail/desktop/gitHub-search-preview.jpg',
        './assets/detail/desktop/github-search-preview-mobile.png',
      ],
      imgHero: './assets/detail/desktop/gitHub-search-preview.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'Planets fact site',
      description:
        'Planets Fact Site is a small Angular application designed to showcase information about various planets and their unique characteristics. It provides an intuitive and user-friendly interface.',
      id: 'planets',
      imgUrl: './assets/portfolio/desktop/preview-planets-fact-site.jpg',
      link: 'https://lappranti.github.io/planets-fact-site/',
      staticImg: [
        './assets/detail/desktop/preview-planets-fact-site.jpg',
        './assets/detail/desktop/planets-fact-site-preview-mobile.jpg',
      ],
      imgHero: './assets/detail/desktop/preview-planets-fact-site.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'Age Caulculator',
      description: `Age Calculator App is a user-friendly application that simplifies the process of calculating one's age. With an intuitive interface, this app allows users to input their birthdate, and it instantly provides their current age, helping users keep track of their age conveniently.`,
      id: 'age-calculator',
      imgUrl: './assets/portfolio/desktop/desktop-design.jpg',
      link: 'https://lappranti.github.io/age-calculator-app/',
      staticImg: [
        './assets/detail/desktop/desktop-preview.jpg',
        './assets/detail/desktop/age-calculator-preview-mobile.jpg',
      ],
      imgHero: './assets/detail/desktop/desktop-completed.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    {
      title: 'Caulculator App',
      description:
        'The Calculator application is a computer program that enables users to perform basic mathematical operations such as addition, subtraction, multiplication, and division.',
      id: 'calculator-app',
      imgUrl: './assets/portfolio/desktop/desktop-preview-caulculator.jpg',
      link: 'https://lappranti.github.io/mini-caculator-app/',
      staticImg: [
        './assets/detail/desktop/desktop-design-theme-3.jpg',
        './assets/detail/desktop/desktop-design-theme-mobile.jpg',
      ],
      imgHero: './assets/detail/desktop/desktop-preview-caulculator.jpg',
      technos: ['HTML', 'SCSS', 'JS'],
    },
    // ... autres éléments
  ];

  constructor() {}

  getData() {
    return of(this.listProject);
  }
}
