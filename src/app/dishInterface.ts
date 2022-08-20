// tslint:disable-next-line:class-name
export interface dishInterface {
  key: string | undefined;
  name: string;
  cuisine: string;
  category: string;
  type: string;
  ingredients: Array<string>;
  amount: number;
  price: number;
  description: string;
  imgURL: string;
  currency: string;
  rate: string;
  ratingArr: Array<number>;
  booked: number;
}

