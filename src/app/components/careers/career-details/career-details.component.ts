import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CareerModel } from '../careers.model';
import { CareersService } from '../careers.service';


@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.css']
})
export class CareerDetailsComponent implements OnInit {
  id!:number;
  career!:CareerModel;

  constructor(private careersService:CareersService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']
    this.career = this.careersService.getCareer(id);
    }

}




