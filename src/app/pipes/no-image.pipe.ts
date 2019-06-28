import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(name: string): string {
    let url = 'assets/img/starships/noimage.jpg';
    imagesAvailables.forEach(e => {
      if (e.name === name) {
        url = e.url;
      }
    });

    return url;
  }

}

const imagesAvailables = [
  {
    name: 'Executor',
    url: 'assets/img/starships/executor.png'
  },
  {
    name: 'Millennium Falcon',
    url: 'assets/img/starships/millennium-falcon.jpg'
  },
  {
    name: 'Y-wing',
    url: 'assets/img/starships/y-wing.jpeg'
  },
  {
    name: 'X-wing',
    url: 'assets/img/starships/x-wing.jpg'
  },
  {
    name: 'TIE Advanced x1',
    url: 'assets/img/starships/TIE_Advance_X1.png'
  },
  {
    name: 'Sentinel-class landing craft',
    url: 'assets/img/starships/sentinel.jpg'
  },
  {
    name: 'Death Star',
    url: 'assets/img/starships/death-star.jpeg'
  },
  {
    name: 'Slave 1',
    url: 'assets/img/starships/slave1.png'
  },
  {
    name: 'Imperial shuttle',
    url: 'assets/img/starships/imperial-shuttle.jpg'
  },
  {
    name: 'B-wing',
    url: 'assets/img/starships/B-wing.jpg'
  },
  {
    name: 'A-wing',
    url: 'assets/img/starships/A-wing.png'
  },
  {
    name: 'Calamari Cruiser',
    url: 'assets/img/starships/Calamari-Cruiser.jpg'
  },
  {
    name: 'Rebel transport',
    url: 'assets/img/starships/Rebel-transport.jpg'
  },
  {
    name: 'Star Destroyer',
    url: 'assets/img/starships/Star-Destroyer.jpg'
  },
  {
    name: 'arc-170',
    url: 'assets/img/starships/arc-170.jpg'
  },
  {
    name: 'CR90 corvette',
    url: 'assets/img/starships/CR90-corvette.png'
  }

];


/*
  {
    name: '',
    url: 'assets/img/starships/'
  }
*/