import { Component, OnInit } from '@angular/core';
import Country from 'src/app/models/country.model';

import { CountrieService } from 'src/app/services/countrie.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css'],
})
export class ListCountriesComponent implements OnInit {
  public activeLang = 'es';
  public countries: Country[];

  constructor(
    private _countrie: CountrieService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(this.activeLang);
    this.countries = [];
  }

  ngOnInit(): void {
    this.getCountries();
  }

  async getCountries() {
    try {
      this.countries = await this._countrie.getCountries();
      console.log(this.countries);
    } catch (error) {
      console.log(error);
    }
  }
}
