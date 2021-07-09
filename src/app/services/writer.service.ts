import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { WRITERS } from '../db/escritores.db';
import { Writer } from '../models/writer.model';

@Injectable({
  providedIn: 'root',
})
export class WriterService {
  constructor() {}

  /* Local Storage */
  isWritersLocalStorage(): boolean {
    const writersLocal = localStorage.getItem('writers');
    if (writersLocal) {
      return true;
    }
    return false;
  }

  initLocalStorageWriter() {
    localStorage.setItem('writers', JSON.stringify(WRITERS));
  }

  getWritersLocalStorage(): Writer[] {
    const writersLocal: Writer[] = JSON.parse(localStorage.getItem('writers')!);
    return writersLocal;
  }

  createWriter(writer: Writer): Promise<string> {
    const promise: Promise<string> = new Promise((res, rej) => {
      const writers = this.getWritersLocalStorage();
      writer.id = writers.length + 1;
      writers.push(writer);
      localStorage.setItem('writers', JSON.stringify(writers));
      res('Escritor creado exitosamente');
    });
    return promise;
  }

  /* END Local Storage */

  getAllWriters(): Observable<Writer[]> {
    const listWriters: Promise<Writer[]> = new Promise((resolve, reject) => {
      if (!this.isWritersLocalStorage()) {
        this.initLocalStorageWriter();
      }
      resolve(this.getWritersLocalStorage());
    });
    return from(listWriters);
  }

  getFilterWriters(country: string): Observable<Writer[]> {
    const listWriters: Promise<Writer[]> = new Promise((resolve, reject) => {
      if (!this.isWritersLocalStorage()) {
        this.initLocalStorageWriter();
      }
      const writers = this.getWritersLocalStorage().filter(
        (writer) => writer.pais === country
      );
      resolve(writers);
    });
    return from(listWriters);
  }

  getOneWriter(id: number): Promise<Writer> {
    const promise: Promise<Writer> = new Promise((resolve, reject) => {
      if (!this.isWritersLocalStorage()) {
        this.initLocalStorageWriter();
      }
      const writer: Writer = this.getWritersLocalStorage().find(
        (writer) => writer.id === id
      )!;
      resolve(writer);
    });
    return promise;
  }
}
