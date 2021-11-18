import { Component, Input, OnInit } from '@angular/core';
import { Organisation } from 'src/app/models/organisation.model';

@Component({
  selector: 'app-npo-cards',
  templateUrl: './npo-cards.component.html',
  styleUrls: ['./npo-cards.component.css']
})

export class NpoCardsComponent implements OnInit {
  @Input() organisation!: Organisation;
  constructor() { }

  ngOnInit(): void {
    if (this.organisation == null) {
      console.log("is null")
      this.organisation = new Organisation(0, "", "", "", "", "", "", "");
    }
  }
}
