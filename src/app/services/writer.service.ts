import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { WRITERS } from '../db/escritores.db';
import { Writer } from '../models/writer.model';

@Injectable({
  providedIn: 'root',
})
export class WriterService {
  constructor() {}

  getAllWriters(): Observable<Writer[]> {
    const listWriters: Promise<Writer[]> = new Promise((resolve, reject) => {
      resolve(WRITERS);
    });
    return from(listWriters);
  }

  getFilterWriters(country: string): Observable<Writer[]> {
    const listWriters: Promise<Writer[]> = new Promise((resolve, reject) => {
      const writers = WRITERS.filter((writer) => writer.pais === country);
      resolve(writers);
    });
    return from(listWriters);
  }
}
