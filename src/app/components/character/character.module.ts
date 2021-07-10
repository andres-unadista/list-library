import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { CharacterRoutingModule } from './character-routing.module';
import { ListCharacterComponent } from './list-character/list-character.component';
import { ToolsModule } from '../tools/tools.module';


@NgModule({
  declarations: [
    ListCharacterComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    ToolsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient],
      },
    }),
  ]
})
export class CharacterModule { }
