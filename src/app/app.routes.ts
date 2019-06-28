import { Routes } from '@angular/router';
import { StarshipsListComponent } from './pages/starships-list/starships-list.component';
import { HomeComponent } from './pages/home/home.component';

// DEFINE THE ROUTES APP
export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'starships-list/:distance', component: StarshipsListComponent},
    // Default routes
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: '**', pathMatch: 'full', component: HomeComponent}
];