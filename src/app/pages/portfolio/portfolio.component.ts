import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/utilities/data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  windowSize!: number;

  listProject!: Array<any>;

  constructor(private router: Router, private data: DataService) {}
  ngOnInit(): void {
    this.windowSize = window.innerWidth;
    this.getWindowWidth();

    this.data.getData().subscribe(resp => {
      this.listProject = resp;
    });
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
