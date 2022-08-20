import { Component, OnInit, Input,} from '@angular/core';
import {Forum} from "../forum";



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit{
  @Input() postComment!: Forum;


  constructor() {
  }
  ngOnInit() {
  }



}
