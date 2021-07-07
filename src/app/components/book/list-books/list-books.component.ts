import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css'],
})
export class ListBooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private aRoute: ActivatedRoute, private _book: BookService) {}

  ngOnInit(): void {
    this.aRoute.parent?.params.subscribe((params) => {
      const idWriter = parseInt(params.writerId);
      this.getBooks(idWriter);
    });
  }

  async getBooks(idWriter: number) {
    const books = await this._book.getWriterBooks(idWriter);
    console.log(books);
    this.books = books;
  }
}
