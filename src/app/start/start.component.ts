import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth-service/auth.service";
import {User} from "../user";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  user!: User;
  constructor(private af: AuthService) {this.af.userData$.subscribe(user => this.user = user);}
  ngOnInit(): void {}
  logout(): void{
    this.af.singOut();
  }

}
