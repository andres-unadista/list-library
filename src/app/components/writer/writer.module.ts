import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriterRoutingModule } from './writer-routing.module';
import { ListWriterComponent } from './list-writer/list-writer.component';
import { DetailWriterComponent } from './detail-writer/detail-writer.component';
import { ItemWriterComponent } from './item-writer/item-writer.component';
import { BookModule } from '../book/book.module';


@NgModule({
  declarations: [
    ListWriterComponent,
    DetailWriterComponent,
    ItemWriterComponent
  ],
  imports: [
    CommonModule,
    WriterRoutingModule,
    BookModule
  ]
})
export class WriterModule { }
