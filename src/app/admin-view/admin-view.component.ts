import { Component, OnInit } from '@angular/core';
import {DataService} from "../data-service/data.service";
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {User} from "../user";

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  case = 0;
  users!: User[];
  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(): void {
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

}
