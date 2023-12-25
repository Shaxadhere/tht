export interface IFetchUtilTypes {
  url: string;
  method: string;
  body?: any;
}

export interface IProduct {
  id: string;
  name: string;
  type: string;
  chocolates: IChocolate[];
  drinks: IDrink[];
}

export interface IChocolate {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface IDrink {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface ICart {
  chips: string | null;
  chocolate: string | null;
  drink: string | null;
}

export interface IRootState {
  cart: ICart;
}

export type ICART_KEYS = 'drink'|'chips'|'chocolate'
