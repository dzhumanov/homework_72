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
