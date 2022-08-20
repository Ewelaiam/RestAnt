import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {AuthService} from "../../auth-service/auth.service";
import value from "*.json";

@Component({
  selector: 'app-persistence',
  templateUrl: './persistence.component.html',
  styleUrls: ['./persistence.component.css']
})
export class PersistenceComponent implements OnInit {

  modelForm = new FormControl();
  persistence = "local";

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }


  setPersistence(s: string){
    this.auth.setPersistance(s);
  }

}
