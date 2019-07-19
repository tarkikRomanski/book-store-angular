import { Injectable } from '@angular/core';
import { ShortBook } from "../../models/book";

@Injectable()
export class WishListService {
  private wishList: ShortBook[] = [];

  getList(): ShortBook[] {
    return this.wishList;
  }

  getQuantity(): number {
    return this.wishList.length;
  }

  add(book: ShortBook): void {
    this.wishList.push(book);
  }

  remove(id: number): boolean {
    const removeIndex = this.wishList.findIndex((book: ShortBook) => book.id === id);

    if (removeIndex < -1) return false;

    this.wishList.splice(removeIndex, 1);
    return true;
  }
}
