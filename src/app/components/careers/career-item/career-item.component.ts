import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CareerModel } from '../careers.model';
import { CareersService } from '../careers.service';

@Component({
  selector: 'app-career-item',
  templateUrl: './career-item.component.html',
  styleUrls: ['./career-item.component.css']
})
export class CareerItemComponent implements OnInit {

  @Input() career!:CareerModel;
  @Input() index!:number;

  constructor(private router:Router, private careersService:CareersService) { }

  ngOnInit(): void {

  }
  showJobDetails() {
    this.router.navigate(['/job-details', this.career.id]);
    
  }
}
