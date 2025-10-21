
export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: 'Cà Phê' | 'Trà' | 'Bánh Ngọt';
}

export interface CartItem extends Product {
  quantity: number;
}
