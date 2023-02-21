import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  links:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addLink(newLink: string) {
    if (newLink) {
      this.links.push(newLink);
    }

  }

}
