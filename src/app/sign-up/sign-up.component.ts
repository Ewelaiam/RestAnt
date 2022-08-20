import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth-service/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email = '';
  password = '';

  constructor(private af: AuthService) { }

  ngOnInit(): void {
  }

  save(){
    this.af.register(this.email, this.password);
  }

}
