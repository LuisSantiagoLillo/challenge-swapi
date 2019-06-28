import { Component, OnInit } from '@angular/core';
import { SwApiService } from '../../../services/sw-api.service';

@Component({
  selector: 'app-pagination-buttons',
  templateUrl: './pagination-buttons.component.html',
  styleUrls: ['./pagination-buttons.component.css']
})
export class PaginationButtonsComponent implements OnInit {

  constructor(
    public _swService: SwApiService

  ) { }

  ngOnInit() {
  }

  searchNextStarships() {
    this._swService.getStarshipsNextPage();
  }

  searchPreviousStarships() {
    this._swService.getStarshipsPreviusPage();
  }

}
