import { Component } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(){
    render(
      {
        id:"#myPaypalButtons",
        currency: "EUR",
        value: "100",
        onApprove: (details) =>{
          alert("approved")
        }
      }
    );
  }
}
