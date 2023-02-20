import { Component, Input, OnInit } from '@angular/core';
import { CareerModel } from '../careers.model';

@Component({
  selector: 'app-career-item',
  templateUrl: './career-item.component.html',
  styleUrls: ['./career-item.component.css']
})
export class CareerItemComponent implements OnInit {

  @Input() career!:CareerModel;
  @Input() index!:number;

  constructor() { }

  ngOnInit(): void {

  }
}
