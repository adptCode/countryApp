import { Component, OnInit } from '@angular/core';
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [CountryTableComponent, SearchBoxComponent, LoadingSpinnerComponent],
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry( term: string):void {

    this.isLoading = true;

    this.countriesService.searchCountry(term)
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      })
  }


}
