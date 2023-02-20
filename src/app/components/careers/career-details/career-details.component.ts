import { Component, OnInit } from '@angular/core';
import { CareerModel } from '../careers.model';


@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.css']
})
export class CareerDetailsComponent implements OnInit {
  id!:number;
  career!:CareerModel;

  constructor() { }

  ngOnInit(): void {
    }

}




