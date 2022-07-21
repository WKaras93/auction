import { Injectable } from '@angular/core';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[]
  ) {}
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  getProducts(): Product[] {
    return products.map(product => new Product(
      product.id,
      product.title,
      product.price,
      product.rating,
      product.description,
      product.categories
    ));
  }

  getProductByID(productID: number): Product {
    return products.find(product => product.id === productID) as Product;
  }
}

const products = [
  {
    'id': 0,
    'title': 'First product',
    'price': 15.99,
    'rating': 3.3,
    'description': 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    'categories': ['electronics', 'hardware']
  },

  {
    'id': 2,
    'title': 'Second product',
    'price': 10.00,
    'rating': 5.0,
    'description': 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    'categories': ['books']
  },
  
  {
    'id': 3,
    'title': 'Third product',
    'price': 9.95,
    'rating': 4.1,
    'description': 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    'categories': ['electronics', 'headphones']
  },
]
