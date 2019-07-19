import { Injectable } from '@angular/core';
import { ShortBook } from "../../models/book";

@Injectable()
export class CartService {
  private books: ShortBook[] = [];

  getList(): ShortBook[] {
    return this.books;
  }

  add(book: ShortBook): void {
    this.books.push(book);
  }

  remove(id: number): boolean {
    const removeIndex = this.books.findIndex((book: ShortBook) => book.id === id);

    if (removeIndex < -1) return false;

    this.books.splice(removeIndex, 1);
    return true;
  }

  getQuantity(): number {
    return this.books.length;
  }

  getAmount(): number {
    return this.books.reduce((sum: number, book: ShortBook) => sum + book.price, 0);
  }
}
