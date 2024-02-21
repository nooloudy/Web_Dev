
import { Component } from '@angular/core';

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  kaspiLink: string;
  images?: string[]; 
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      image: 'assets/images/IPhone13/13mainScreen.jpg',
      name: 'IPhone 13',
      description: "Смартфон Apple iPhone 13 128Gb Midnight черный",
      rating: 4.5,
      price: 293968,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
      images: ['assets/images/IPhone13/13FirstScreen.jpg', 'assets/images/IPhone13/13SecondScreen.jpg', 'assets/images/IPhone13/13ThirdScreen.jpg']
    },
    {
      id: 2,
      image: 'assets/images/IPhone13Pro/main.jpg',
      name: 'IPhone 13 Pro',
      description: 'Смартфон Apple iPhone 13 Pro 128Gb серый',
      rating: 4.5,
      price: 481879,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-128gb-seryi-102298759/?c=750000000',
      images: ['assets/images/IPhone13Pro/first.jpg', 'assets/images/IPhone13Pro/second.jpg', 'assets/images/IPhone13Pro/third.jpg']
    },
    {
      id: 3,
      image: 'assets/images/IPhone13/13mainScreen.jpg',
      name: 'IPhone 13 Pro Max',
      description: 'Смартфон Apple iPhone 13 Pro Max 128Gb голубой',
      rating: 4.5,
      price: 504995 ,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-chernyi-106363289/?c=750000000',
      images: ['assets/images/IPhone13/13FirstScreen.jpg', 'assets/images/IPhone13/13SecondScreen.jpg', 'assets/images/IPhone13/13ThirdScreen.jpg']
    },
    {
      id: 4,
      image: 'assets/images/IPhone14/main.jpg',
      name: 'IPhone 14',
      description: 'Смартфон Apple iPhone 14 128Gb черный',
      rating: 4.5,
      price: 327310,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-goluboi-102298789/?c=750000000',
      images: ['assets/images/IPhone14/first.jpg', 'assets/images/IPhone14/second.jpg', 'assets/images/IPhone14/third.jpg']
    },
    {
      id: 5,
      image: 'assets/images/IPhone14Pro/main.jpg',
      name: 'IPhone 14 Pro',
      description: 'Смартфон Apple iPhone 14 Pro 256Gb фиолетовый',
      rating: 4.5,
      price: 581599,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000',
      images: ['assets/images/IPhone14Pro/first.jpg', 'assets/images/IPhone14Pro/second.jpg', 'assets/images/IPhone14Pro/third.jpg']
    },
    {
      id: 6,
      image: 'assets/images/IPhone14ProMax/main.jpg',
      name: 'IPhone 14 Pro Max',
      description: 'Смартфон Apple iPhone 14 Pro Max 256Gb черный',
      rating: 4.5,
      price: 626881,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-chernyi-106363289/?c=750000000',
      images: ['assets/images/IPhone14ProMax/first.jpg', 'assets/images/IPhone14ProMax/second.jpg', 'assets/images/IPhone14ProMax/third.jpg']
    },
    {
      id: 7,
      image: 'assets/images/IPhone15/main.jfif',
      name: 'IPhone 15',
      description: "Смартфон Apple iPhone 15 128Gb черный",
      rating: 4.5,
      price: 374372 ,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
      images: ['assets/images/IPhone15/first.jfif', 'assets/images/IPhone15/second.jfif', 'assets/images/IPhone15/third.jfif']
    },
    {
      id: 8,
      image: 'assets/images/IPhone15Pro/main.jpg',
      name: 'IPhone 15 Pro',
      description: 'Смартфон Apple iPhone 15 Pro 256Gb серый',
      rating: 4.5,
      price: 571960,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000',
      images: ['assets/images/IPhone15Pro/first.jpg', 'assets/images/IPhone15Pro/second.jpg', 'assets/images/IPhone15Pro/third.jpg']
    },
    {
      id: 9,
      image: 'assets/images/IPhone15ProMax/main.jfif',
      name: 'IPhone 15 Pro Max',
      description: 'Смартфон Apple iPhone 15 Pro Max 256Gb синий',
      rating: 4.5,
      price: 615597,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=750000000',
      images: ['assets/images/IPhone15ProMax/first.jfif', 'assets/images/IPhone15ProMax/second.jfif', 'assets/images/IPhone15ProMax/third.jfif']
    },
    {
      id: 9,
      image: 'assets/images/Samsung/main.jpg',
      name: 'Samsung Galaxy S22 Ultra',
      description: 'Смартфон Samsung Galaxy S22 Ultra 12 ГБ/256 ГБ зеленый',
      rating: 4.5,
      price: 615597,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=750000000',
      images: ['assets/images/Samsung/first.jpg', 'assets/images/Samsung/second.jpg', 'assets/images/Samsung/third.jpg']
    }

  ];

  shareProduct(product: Product): void {
  
    const shareLink = `Share this product: ${product.kaspiLink}`;
    this.redirectToMessagingApp(shareLink);
  }

  private redirectToMessagingApp(link: string): void {

    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`, '_blank');
  }
}
