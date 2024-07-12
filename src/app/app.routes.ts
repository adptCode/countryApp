import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPagesComponent } from './shared/pages/contact-pages/contact-pages.component';
import { ByCapitalPageComponent } from './countries/pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './countries/pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './countries/pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './countries/pages/country-page/country-page.component';

export const routes: Routes = [
  //{ path: 'home', component: HomePageComponent },
  //{ path: 'about', component: AboutPageComponent },
  //{ path: 'contact', component: ContactPagesComponent },
  { path: '', redirectTo: 'countries/by-capital', pathMatch: 'full' },
  { path: 'countries', children: [
    { path: 'by-capital', component: ByCapitalPageComponent },
    { path: 'by-country', component: ByCountryPageComponent },
    { path: 'by-region', component: ByRegionPageComponent },
    { path: 'by/:id', component: CountryPageComponent },

  ]},
  { path: '**', redirectTo: 'countries/by-capital' }
];
