import { Component, OnInit } from '@angular/core';
import { products } from '../mock-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.scss']
})
export class AppProductListComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
  }

}
