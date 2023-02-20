import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images_carousel:string[] = [
    'https://as2.ftcdn.net/v2/jpg/05/60/45/11/1000_F_560451168_F9UAfZRWhcqxBjJbqCVP7PAUnoJqTtTX.jpg',
    'https://as2.ftcdn.net/v2/jpg/05/67/94/99/1000_F_567949975_y3c88OuMtsnPUibmDlaRT5ReCEcNcrAc.jpg',
    'https://as2.ftcdn.net/v2/jpg/02/82/75/31/1000_F_282753146_V6ZHcruFiIauT4ecZyf9a2J066LD2K9N.jpg'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
