export interface Dish {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface DishMutation {
  name: string;
  image: string;
  price: string;
}

export interface DishesList {
  [id: string]: ApiDish;
}

export type ApiDish = Omit<Dish, "id">;

export interface CartDish {
  dish: Dish;
  amount: number;
}

export interface Customer {
  name: string;
  address: string;
  phone: string;
}

export interface dishAndAmount {
  dish: number;
}

export interface ApiOrder {
  customer: Customer;
  dishes: CartDish[];
}

export interface ApiOrders {
  [id: string]: ApiOrder;
}
