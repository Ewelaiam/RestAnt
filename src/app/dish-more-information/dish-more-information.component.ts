import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data-service/data.service";
import {map} from "rxjs/operators";
import {User} from "../user";
import {AuthService} from "../auth-service/auth.service";
import {dishInterface} from "../dishInterface";
import {Forum} from "./forum/forum";

@Component({
  selector: 'app-dish-more-information',
  templateUrl: './dish-more-information.component.html',
  styleUrls: ['./dish-more-information.component.css']
})
export class DishMoreInformationComponent implements OnInit {

  user : User | undefined;
  routeSub: string | undefined;
  openDish: any;
  booked = 0;
  rate = 0;
  rateNum = 1;
  rateChose = 'Rate here';
  // counter = 0;



  constructor(private route: ActivatedRoute, private data: DataService, private router: Router, private af: AuthService) {
    this.af.userData$.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.routeSub = params['id'];
    });
    if (this.routeSub === undefined ){
      this.router.navigate(['/listOfDishes']).then(r => r);
    } else {
      this.data.getList().pipe(
        map(changes =>
          changes.map((c: { payload: { key: any; val: () => any; }; }) => {
            return ({key: c.payload.key, ...c.payload.val()}); }
          ).filter( (c: any) => c.key === this.routeSub)
            .map((c: any) => {
              return c;
            }))
      ).subscribe(list => {
        if (list[0] === undefined){
          this.router.navigate(['/dishes']).then(r => r);
        }
        this.booked = list[0].booked;
        this.rate = list[0].rate;
        this.rateNum = list[0].rateNum;
        this.openDish = list;
      } );
    }

  }



  book(): void{
    if (this.routeSub != null) {
      this.data.update(this.routeSub, {booked: (this.booked + 1)});
    }
  }
  cancel(): void{
    if (this.routeSub != null) {
      this.data.update(this.routeSub, {booked: (this.booked - 1)});
    }
  }
  delete(): void{
    if (this.routeSub != null) {
      this.data.remove(this.routeSub);
      this.router.navigate(['/listOfDishes']).then(r => r);
    }
  }



  addToRate(): void {
    if (this.routeSub != null && this.rateChose != null) {
      // tslint:disable-next-line:radix
      this.data.update(this.routeSub, {rate: (this.rate + this.rateChose)});
      this.data.update(this.routeSub, {rateNum: (this.rateNum + 1)});
    }
  }

  // setReviewCounter(counter: number){
  //   this.counter = counter;
  // }




}
