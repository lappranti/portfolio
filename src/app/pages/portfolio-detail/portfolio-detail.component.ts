import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/utilities/data.service';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  listProject!: Array<any>;

  currentProjet!: any;
  currentStaticPrieviewImage!: string;

  nextProject!: any;
  prevProject!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService
  ) {}
  ngOnInit(): void {
    this.data.getData().subscribe(resp => {
      this.listProject = resp;
      this.getCurrentProject();
    });

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

  transformString(input: string): string {
    const words = input.split('-');
    const transformedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return transformedWords.join(' ');
  }
}
