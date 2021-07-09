import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListBooksComponent } from '../book/list-books/list-books.component';
import { CreateWriterComponent } from './create-writer/create-writer.component';
import { DetailWriterComponent } from './detail-writer/detail-writer.component';
import { ListWriterComponent } from './list-writer/list-writer.component';

const routes: Routes = [
  { path: '', component: ListWriterComponent },
  { path: 'crear', component: CreateWriterComponent },
  {
    path: ':writerId',
    component: DetailWriterComponent,
    children: [
      {
        path: 'book',
        component: ListBooksComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriterRoutingModule {}
