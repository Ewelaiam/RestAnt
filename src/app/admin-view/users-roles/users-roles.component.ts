import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../auth-service/auth.service";
import {Roles, User} from "../../user";

@Component({
  selector: 'app-users-roles',
  templateUrl: './users-roles.component.html',
  styleUrls: ['./users-roles.component.css']
})
export class UsersRolesComponent implements OnInit {

  @Input()
  userData!: User;
  currData!: Roles;
  @Input() uid!: string;
  flag1 = false;
  flag2 = false;
  flag3 = false;
  flag4 = false;
  flag5 = false;

  constructor(private af: AuthService) {}

  ngOnInit(): void {
    this.currData = this.userData.roles;
    this.uid = this.userData.uid;
  }
  save(): void{
    if (this.userData != null){
      this.af.setUserRole(this.userData.uid, this.currData);
      this.flag1 = false;
      this.flag2 = false;
      this.flag3 = false;
      this.flag4 = false;
      this.flag5 = false;
    }
  }

}
