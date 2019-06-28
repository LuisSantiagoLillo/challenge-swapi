import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ROUTES
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// SERVICES - PROVIDERS
import { SwApiService } from './services/sw-api.service';

// PIPES
import { NoImagePipe } from './pipes/no-image.pipe';
import { CountStopsPipe } from './pipes/count-stops.pipe';


// PAGES
import { HomeComponent } from './pages/home/home.component';
import { SearchPanelComponent } from './pages/search-panel/search-panel.component';
import { StarshipsListComponent } from './pages/starships-list/starships-list.component';

// COMPONENTS
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchPanelComponent,
    StarshipsListComponent,
    HomeComponent,
    NoImagePipe,
    CountStopsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    SwApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
