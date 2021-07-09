import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WriterRoutingModule } from './writer-routing.module';
import { ListWriterComponent } from './list-writer/list-writer.component';
import { DetailWriterComponent } from './detail-writer/detail-writer.component';
import { ItemWriterComponent } from './item-writer/item-writer.component';
import { BookModule } from '../book/book.module';
import { CreateWriterComponent } from './create-writer/create-writer.component';


@NgModule({
  declarations: [
    ListWriterComponent,
    DetailWriterComponent,
    ItemWriterComponent,
    CreateWriterComponent
  ],
  imports: [
    CommonModule,
    WriterRoutingModule,
    BookModule,
    ReactiveFormsModule,
  ]
})
export class WriterModule { }
