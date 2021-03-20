import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
  let Item=CartItems.find(c=>c.product.productId===product.productId);
  if(Item){
   Item.quantity+=1;
  }else{
    let cartItem=new CartItem();
    cartItem.product=product;
    cartItem.quantity=1;
    CartItems.push(cartItem)

  }
  }

removeFromCart(product:Product){
let Item:CartItem=CartItems.find(c=>c.product.productId===product.productId);
  CartItems.splice(CartItems.indexOf(Item),1);
}

  list():CartItem[]{
     return CartItems;
  }
}
