import { Component, Input, OnInit } from '@angular/core';
import { Writer } from 'src/app/models/writer.model';

@Component({
  selector: 'app-item-writer',
  templateUrl: './item-writer.component.html',
  styleUrls: ['./item-writer.component.css']
})
export class ItemWriterComponent implements OnInit {
  @Input() writer: Writer = {} as Writer;
  constructor() { }

  ngOnInit(): void {
  }

}
