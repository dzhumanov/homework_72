export interface Dish {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface DishesList {
  [id: string]: ApiDish;
}

export type ApiDish = Omit<Dish, "id">;
