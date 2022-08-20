import {Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {dishInterface} from '../dishInterface';
import {DataService} from "../data-service/data.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  @Output() emitter = new EventEmitter<dishInterface>();
  constructor(private formBuilder: FormBuilder, private data: DataService) { }
  modelForm: FormGroup = Object();
  ngOnInit(): void {
    this.modelForm = this.formBuilder.group({
      name: new FormControl('', [Validators.max(15), Validators.required]),
      cuisine: new FormControl('', [Validators.max(30), Validators.required]),
      category: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      ingredients: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.max(3), Validators.required]),
      price: new FormControl('', [Validators.max(1), Validators.required]),
      description: new FormControl('', [Validators.max(200), Validators.required]),
      currency: new FormControl('', Validators.required)
    });
  }
  addDish(): void{
    const urlImg = 'https://source.unsplash.com/1000x900/?' + this.modelForm?.get('cuisine')?.value;
    const x = {
      key: undefined,
      name: this.modelForm?.get('name')?.value,
      cuisine: this.modelForm?.get('cuisine')?.value,
      category: this.modelForm?.get('category')?.value,
      type: this.modelForm?.get('type')?.value,
      ingredients: [],
      amount: this.modelForm?.get('amount')?.value,
      price: this.modelForm?.get('price')?.value,
      description: this.modelForm?.get('description')?.value,
      imgURL: urlImg,
      currency: this.modelForm?.get('currency')?.value,
      rate: "⭐⭐⭐⭐⭐",
      ratingArr: [3,2,1],
      booked: 0
    };
    this.modelForm?.reset();
    this.data.addDish(x);
  }
}
