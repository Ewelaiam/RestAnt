import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth-service/auth.service";
import {User} from "../user";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user: User | undefined;
  constructor(private af: AuthService) {
    this.af.userData$.subscribe(user => this.user = user);
  }
  ngOnInit(): void {}

  logout(): void{
    this.af.singOut();
  }



}
