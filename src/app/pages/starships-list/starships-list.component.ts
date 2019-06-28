import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Starship } from '../../models/Starship';
import { SwApiService } from '../../services/sw-api.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {
  distanceMGLT: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public _swService: SwApiService
  ) {
      this.activatedRoute.params.subscribe( params => {
        this.distanceMGLT = params.distance;
        _swService.distanceMGLT = parseInt(this.distanceMGLT);
        _swService.getStarshipsPerPage(1);
      });
  }

  ngOnInit() {
  }
}
