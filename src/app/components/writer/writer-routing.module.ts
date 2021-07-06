import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListWriterComponent } from './list-writer/list-writer.component';

const routes: Routes = [{
  path: '', component: ListWriterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriterRoutingModule { }
