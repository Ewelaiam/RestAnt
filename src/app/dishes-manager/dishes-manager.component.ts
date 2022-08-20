import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {DataService} from "../data-service/data.service";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-dishes-manager',
  templateUrl: './dishes-manager.component.html',
  styleUrls: ['./dishes-manager.component.css']
})
export class DishesManagerComponent implements OnInit {

  case = 0;
  users: any;
  dishes: any;
  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getUserList();
    this.getList();
  }
  getUserList(): void{
    this.data.getListOfUsers().pipe(
      map(changes =>
        changes.map((c: { payload: { key: any; val: () => any; }; }) => {
            const res: { uid: any; roles: any; email: any } = {
              uid: c.payload.key,
              email: c.payload.val().email,
              roles: c.payload.val().roles
            };
            return (res);
          }
        ))
    ).subscribe(
      users => {
        this.users = users;
      });
  }
  getList(): void{
    this.data.getList().pipe(
      map(changes =>
        changes.map((c: { payload: { key: any; val: () => any; }; }) => {
            return ({key: c.payload.key, ...c.payload.val()});
          }
        ))
    ).subscribe(
      list => {this.dishes = list; });
  }

}
