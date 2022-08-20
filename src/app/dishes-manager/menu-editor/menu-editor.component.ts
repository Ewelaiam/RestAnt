import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../data-service/data.service";
import {Roles, User} from "../../user";
import {dishInterface} from "../../dishInterface";
import {AuthService} from "../../auth-service/auth.service";

@Component({
  selector: 'app-menu-editor',
  templateUrl: './menu-editor.component.html',
  styleUrls: ['./menu-editor.component.css']
})

export class MenuEditorComponent implements OnInit {
  @Input() dishData: any;

  toEdit = false;
  currData!: dishInterface;

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  delete(): void{
    if (this.dishData.key != null) {
      this.data.remove(this.dishData.key);
    }
  }

  edit(): void{
    this.toEdit = true;
  }

  save(s : string): void{
    if (this.dishData != null){
      this.data.setDishData(s);
    }
  }

}
