import { Injectable } from "@angular/core";
import { CareerModel } from "./careers.model";

@Injectable()
export class CareersService {
  careers = [
    {
      id:1,
      name: 'Experienced Data Engineer',
      places:['Bosnia and Herzegovina', 'Bulgaria', 'North Macedonia', 'Slovenia', 'Romania', 'Hungary', 'Serbia']
    },
    {
      id:2,
      name: 'Software Test Engineer',
      places:['Bosnia and Herzegovina', 'Bulgaria', 'North Macedonia']
    },
    {
      id:3,
      name: 'Experienced Python Engineer ',
      places:['Bosnia and Herzegovina', 'Bulgaria', 'North Macedonia', 'Slovenia', 'Romania', 'Hungary', 'Serbia']
    },
    {
      id:4,
      name: 'Experienced DevOps Engineer',
      places:['Slovenia', 'Romania', 'Hungary', 'Serbia']
    },
    {
      id:5,
      name: 'Experienced Solution Architect',
      places:['Bulgaria', 'North Macedonia', 'Slovenia', 'Romania', 'Hungary', 'Serbia']
    },
    {
      id:6,
      name: 'C++ Developer',
      places:['Bosnia and Herzegovina', 'Bulgaria', 'North Macedonia', 'Slovenia', 'Romania', 'Hungary', 'Serbia']
    },
    {
      id:7,
      name: 'Experienced JavaScript Developer',
      places:['Bosnia and Herzegovina', 'Bulgaria', 'North Macedonia', 'Slovenia', 'Romania', 'Hungary', 'Serbia']
    }
  ];

  constructor(){}

  getCareers():CareerModel[] {
    return this.careers;
  }
}
