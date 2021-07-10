import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ResponseCharacter } from '../models/characters.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private routeBase: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(urlPage?: string): Promise<ResponseCharacter> {
    let url = this.routeBase;
    if (urlPage) {
      url = urlPage;
    }
    const characters = this.http.get<ResponseCharacter>(url).toPromise();
    return characters;
  }
}
