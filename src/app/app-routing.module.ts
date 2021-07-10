import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'escritor',
    loadChildren: () =>
      import('./components/writer/writer.module').then((m) => m.WriterModule),
  },
  {
    path: 'paises',
    loadChildren: () =>
      import('./components/countries/countries.module').then(
        (m) => m.CountriesModule
      ),
  },
  {
    path: 'character',
    loadChildren: () =>
      import('./components/character/character.module').then(
        (m) => m.CharacterModule
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: '/escritor' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
