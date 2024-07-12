import { Component } from '@angular/core';
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [CountryTableComponent, SearchBoxComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByCountry( term: string):void {
    this.countriesService.searchCountry(term)
      .subscribe( countries => {
        this.countries = countries;
      })
  }


}
