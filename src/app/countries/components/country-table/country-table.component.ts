import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

}
