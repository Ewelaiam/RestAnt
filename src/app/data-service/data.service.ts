import {Injectable} from '@angular/core';
import {dishInterface} from '../dishInterface';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import {Observable} from 'rxjs';
import {Forum} from "../dish-more-information/forum/forum";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: AngularFireDatabase) { }

  getList(): Observable<any>{ return this.db.list('dishes').snapshotChanges(); }
  addDish(dish: dishInterface): void{
    const dishTab = {
      name: dish.name,
      cuisine: dish.cuisine,
      category: dish.category,
      type: dish.type,
      ingredients: dish.ingredients,
      amount: dish.amount,
      price: dish.price,
      description: dish.description,
      imgURL: dish.imgURL,
      currency: dish.currency,
      rate: dish.rate,
      ratingArr: dish.ratingArr,
      booked: dish.booked
    };
    this.db.list('dishes').push(dishTab);
  }

  addPost(opinion : Forum): void{
    const opinionTab = {
      name: opinion.name,
      title: opinion.title,
      content: opinion.content,
      date: opinion.date
    };
    this.db.list('posts').push(opinionTab);
  }


  update(key: string, value: any): void{
    this.db.list('dishes').update(key, value).then(r => r);
  }
  remove(key: string): void{
    this.db.list('dishes').remove(key).then(r => r);
  }

  getListOfUsers(): Observable<any>{ return this.db.list('user').snapshotChanges(); }

  getListOfPosts(): Observable<any>{ return this.db.list('posts').snapshotChanges(); }

  setDishData(s: string): void{

  }



}
