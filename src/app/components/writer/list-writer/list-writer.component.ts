import { Component, OnInit } from '@angular/core';

import { Writer } from 'src/app/models/writer.model';
import { WriterService } from 'src/app/services/writer.service';

@Component({
  selector: 'app-list-writer',
  templateUrl: './list-writer.component.html',
  styleUrls: ['./list-writer.component.css'],
})
export class ListWriterComponent implements OnInit {
  writers: Writer[] = [];

  constructor(private _writer: WriterService) {}

  ngOnInit(): void {
    this.getAllList();
  }

  onChangeList(event:any) {
    const country = event.target.value;
    if (country === 'todos') {
      this.getAllList();
    } else {
      this.getFilterList(country);
    }
  }

  getAllList() {
    this._writer.getAllWriters().subscribe(
      (data) => {
        this.writers = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getFilterList(country:string) {
    this._writer.getFilterWriters(country).subscribe(
      (data) => {
        this.writers = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
