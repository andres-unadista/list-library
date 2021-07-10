import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Country from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountrieService {
  private route;

  constructor(private http: HttpClient) {
    this.route = 'https://restcountries.eu/rest/v2/region/americas';
  }

  getCountries(): Promise<Country[]> {
    const header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const countries = this.http.get<Country[]>(this.route).toPromise();
    return countries;
  }
}
