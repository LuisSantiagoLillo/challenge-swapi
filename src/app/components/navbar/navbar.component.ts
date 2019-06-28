import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchStarships(distanceMGLT: string) {
    this.router.navigate(['/starships-list', distanceMGLT]);
  }

}
