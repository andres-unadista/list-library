import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriterRoutingModule } from './writer-routing.module';
import { ListWriterComponent } from './list-writer/list-writer.component';


@NgModule({
  declarations: [
    ListWriterComponent
  ],
  imports: [
    CommonModule,
    WriterRoutingModule
  ]
})
export class WriterModule { }
