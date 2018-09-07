import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slip',
  templateUrl: './slip.component.html',
  styleUrls: ['./slip.component.css']
})
export class SlipComponent {
  @Input() slip;
  amt;
  myBets: any[] = [];

  rmFromSlip(i, rmodd) {
    this.slip.bets.splice(i, 1);
    // TODO recalculate slip.total - za da aktualizirame koeficienta
    // podavame kato argument rmodd - koeto e koeficienta 
    // na sre6tata na koqto natiskame "X"-a i delim obshtiq koeficient na tozi koeficient
    this.slip.total = this.slip.total/rmodd;
  }

  bet() {
    console.log('bet');
    this.slip = [];
  }

  constructor() { }
}
