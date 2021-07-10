import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

import { TranslateService } from '@ngx-translate/core';

import { ResponseCharacter } from '../../../models/characters.model';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.css'],
})
export class ListCharacterComponent implements OnInit {
  isLoad: boolean = false;
  characters: ResponseCharacter = {} as ResponseCharacter;
  public activeLang = 'es';

  constructor(
    private _character: CharacterService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  async getCharacters(urlPage?: string) {
    this.isLoad = true;
    let url = undefined;
    if (urlPage) {
      url = urlPage;
    }
    this.characters = await this._character.getCharacters(url);
    this.isLoad = false;
  }

  changePage(urlPage: string) {
    if (urlPage) {
      this.getCharacters(urlPage);
    }
  }

  getCurrentPage(prevPage?: string) {
    let numberPage = 1;
    if (prevPage) {
      const indexPage = prevPage.indexOf('=') + 1;
      numberPage = parseInt(prevPage.substr(indexPage, 1)) + 1;
    }
    return numberPage;
  }
}
