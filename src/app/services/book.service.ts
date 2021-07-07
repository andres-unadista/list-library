import { Injectable } from '@angular/core';
import { BOOKS } from '../db/libros.db';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  getWriterBooks(idWriter: number): Promise<Book[]> {
    const promBooks: Promise<Book[]> = new Promise((res, rej) => {
      const books = BOOKS.filter((book) => book.escritor === idWriter);
      console.log(books);
      res(books);
    });
    return promBooks;
  }
}
