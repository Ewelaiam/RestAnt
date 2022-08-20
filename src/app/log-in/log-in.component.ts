import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {AuthService} from "../auth-service/auth.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email = '';
  password = '';

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.signIn(this.email, this.password);
  }

}
