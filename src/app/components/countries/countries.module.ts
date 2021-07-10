import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { CountriesRoutingModule } from './countries-routing.module';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    ListCountriesComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
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
export class CountriesModule { }
