import { Component, OnInit } from '@angular/core';
import { CartService } from "../../shared/services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit{
  public cartQuantity: number;
  public cartPrice: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateData();
  }

  private updateData(): void {
    this.cartQuantity = this.cartService.getQuantity();
    this.cartPrice = this.cartService.getAmount();
  }
}
