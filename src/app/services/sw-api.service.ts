import { Injectable } from '@angular/core';
import { Starship } from '../models/Starship';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
/**
 * Service for SW-API
 * Important AUTHENTICATION is NOT REQUIRED
 */
export class SwApiService {
  starships: Starship[] = [];
  distanceMGLT: number;
  totalStarships: number;
  loading: boolean = false;
  error: boolean = false;
  url_sw_api: string = 'https://swapi.co/api/starships/';
  // Buttons NEXT & PREVIUS
  url_sw_api_next: string;
  url_sw_api_previus: string;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
  ) { }


  buildStarshipsArr(resp: any): void {
    this.starships = [];
    this.url_sw_api_next = resp.next;
    this.url_sw_api_previus = resp.previous;
    this.totalStarships = resp.count;
    resp.results.forEach(element => {
      if (element.MGLT !== 'unknown' && element.consumables !== 'unknown') {
        const starship: Starship = {
          stops: this.getStops(element.MGLT, element.consumables),
          MGLT: element.MGLT,
          cargo_capacity: element.cargo_capacity,
          consumables: element.consumables,
          cost_in_credits: element.cost_in_credits,
          manufacturer: element.manufacturer,
          model: element.model,
          name: element.name,
          passengers: element.passengers,
          pilots: element.pilots,
          url: element.url
        };
        this.starships.push(starship);
      }
    });
    console.log(this.starships);
  }


  getStarshipsPerPage(page: number) {
    this.loading = true;
    this.http.get(`${this.url_sw_api}?page=${page}`).toPromise()
      .then(resp => {
        setTimeout(() => {
          this.loading = false;
        this.error = false;
        this.buildStarshipsArr(resp);
        }, 1000);

      })
      .catch(err => {
        this.loading = false;
        this.error = true;
        console.log(err);
      });
  }

  getStarshipsNextPage() {
    this.loading = true;
    this.http.get(this.url_sw_api_next).toPromise()
      .then(resp => {
        setTimeout(() => {
          this.loading = false;
        this.error = false;
        this.buildStarshipsArr(resp);
        }, 1000);

      })
      .catch(err => {
        this.loading = false;
        this.error = true;
        console.log(err);
      });
  }

  getStarshipsPreviusPage() {
    this.loading = true;
    this.http.get(this.url_sw_api_previus).toPromise()
      .then(resp => {
        setTimeout(() => {
          this.loading = false;
        this.error = false;
        this.buildStarshipsArr(resp);
        }, 1000);

      })
      .catch(err => {
        this.loading = false;
        this.error = true;
        console.log(err);
      });  }


  /*
  getStarshipsPerPage(page: number): Starship[] {
    this.http.get(`${this.url_sw_api}?page=${page}`, {headers: this.headers}).toPromise()
      .then(resp => this.buildStarshipsArr(resp))
      .catch(err => console.log(err));
  }

  getStarshipsNextPage(): Promise<any> {
    return this.http.get(this.url_sw_api_next, {headers: this.headers}).toPromise();
  }

  getStarshipsPreviusPage(): Promise<any> {
    return this.http.get(this.url_sw_api_previus, {headers: this.headers}).toPromise();
  }
*/

  getStops(MGLT, consumables): number {
  let stops = 0;
    let consumableSplit = consumables.split(' ');
    if (consumableSplit.length == 2) {
      let consumableDays = this.getDays(parseInt(consumableSplit[0]), consumableSplit[1]);
      let hours = this.distanceMGLT/parseInt(MGLT);
      let days = hours / 24;
      stops = days / consumableDays;
    }
    return Math.round(stops);
  }

 getDays(numberDays: number, stringTime: string) {
  let days = -1;
  let values = [['years', 365], ['month', 30], ['week', 7], ['day', 1], ['year', 365], ['months', 30], ['weeks', 7], ['days', 1]];
  values.forEach(e => {
    if (e[0] == stringTime) {
      let num: any = e[1];
      days = num * numberDays;
    }
  });
  return days;
}
}
