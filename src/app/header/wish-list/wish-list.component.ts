import { Component, OnInit } from '@angular/core';
import { WishListService } from "../../shared/services/wish-list.service";

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.sass']
})
export class WishListComponent implements OnInit{
  public itemsQuantity: number;

  constructor(private wishListService: WishListService) { }

  ngOnInit(): void {
    this.updateData();
  }

  private updateData(): void {
    this.itemsQuantity = this.wishListService.getQuantity();
  }
}
