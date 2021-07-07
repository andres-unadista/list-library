import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailWriterComponent } from './detail-writer/detail-writer.component';

import { ListWriterComponent } from './list-writer/list-writer.component';

const routes: Routes = [
  { path: '', component: ListWriterComponent },
  { path: ':writerId', component: DetailWriterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriterRoutingModule {}
