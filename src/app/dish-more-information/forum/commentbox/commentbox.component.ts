import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DataService} from "../../../data-service/data.service";

@Component({
  selector: 'app-commentbox',
  templateUrl: './commentbox.component.html',
  styleUrls: ['./commentbox.component.css']
})
export class CommentboxComponent implements OnInit {

  commentForm!: FormGroup;
  commentInfo: Array<object> = [];
  submitted: Boolean = false;
  public id = 0;
  @Output() usercomment = new EventEmitter<object>();

  // constructor(private formBuilder: FormBuilder, private data: DataService) { }
  // modelForm: FormGroup = Object();
  constructor(private formBuilder: FormBuilder, private data: DataService) { }

  ngOnInit() {
    this.createForm();
    //this.createNick();
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(500)]],
      nick: ['', [Validators.required, Validators.minLength(1)]],
      dishname: ['', [Validators.required, Validators.minLength(1)]],
      buydate: ['']
    });
  }


  onSubmit() {
    this.submitted = true;
    if (this.commentForm.invalid) {
      return false;
    } else {
      this.commentInfo.push({
        commentId : this.id++,
        nick: this.commentForm?.get('nick')?.value,
        // nick: this.commentForm.controls['nick'].value,
        dishname: this.commentForm?.get('dishname')?.value,
        buydate: this.commentForm?.get('buydate')?.value,
        currentDate : new Date(),
        commentTxt: this.commentForm.controls['comment'].value,
        replyComment: []
      });
      this.usercomment.emit(this.commentInfo);
    }

    const x ={
      id: undefined,
      name: this.commentForm?.get('nick')?.value,
      title: this.commentForm?.get('dishname')?.value,
      content: this.commentForm?.get('comment')?.value,
      date: this.commentForm?.get('buydate')?.value
    }
    this.commentForm.reset();
    this.data.addPost(x);
  }



}

