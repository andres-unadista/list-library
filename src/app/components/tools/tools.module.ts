import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { LoadComponent } from './load/load.component';


@NgModule({
  declarations: [
    LoadComponent
  ],
  imports: [
    CommonModule,
    ToolsRoutingModule
  ],
  exports: [
    LoadComponent
  ]
})
export class ToolsModule { }
