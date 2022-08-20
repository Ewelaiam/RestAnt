import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Forum} from "./forum";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../../data-service/data.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  @Output() emitter = new EventEmitter<Forum>();


  comments: Array<any> = [];
  count: number = 0;

  posts : any;


  constructor(private data: DataService) {}


  ngOnInit() {
    this.count = 0;
    this.addPosts();

  }

  addPosts() : void{
    this.data.getListOfPosts().pipe(
      map(changes =>
        changes.map((c: { payload: { key: any; val: () => any; }; }) => {
            return ({key: c.payload.key, ...c.payload.val()});
          }
        ))
    ).subscribe(
      posts => {this.posts = posts; });
  }

  takeComment($event: any) {
    this.comments = $event;
    this.count = this.comments.length;
    //console.log(this.comments.length);
  }



}
