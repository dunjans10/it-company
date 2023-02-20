import { Component, OnInit } from '@angular/core';
import { CareerModel } from './careers.model';
import { CareersService } from './careers.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  careers:CareerModel[] = [];

  constructor(private careersService:CareersService) { }

  ngOnInit(): void {
    this.careers = this.careersService.getCareers()
  }



}
