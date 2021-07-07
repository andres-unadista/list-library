import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Writer } from 'src/app/models/writer.model';
import { WriterService } from 'src/app/services/writer.service';

@Component({
  selector: 'app-detail-writer',
  templateUrl: './detail-writer.component.html',
  styleUrls: ['./detail-writer.component.css'],
})
export class DetailWriterComponent implements OnInit {
  writer: Writer = {} as Writer;

  constructor(
    private aRouter: ActivatedRoute,
    private _writer: WriterService
  ) {}

  ngOnInit(): void {
    this.aRouter.params.subscribe((params) => {
      const idWriter = parseInt(params.writerId);
      this.getWriter(idWriter);
    });
  }

  async getWriter(idWriter: number) {
    const writer = await this._writer.getOneWriter(idWriter);
    this.writer = writer;
  }
}
