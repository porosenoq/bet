import { Component, Output, EventEmitter } from '@angular/core';

declare global {
  interface Array<T> {
    oddsTotal();
  }
}

if (!Array.prototype.oddsTotal) {
  Array.prototype.oddsTotal = function() {
    var initialValue = 1;
    var coef = this.reduce(function (accumulator, currentValue) {
      return accumulator * currentValue.odd;
    },initialValue);
    return coef;
  }
}

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {

  constructor() { }
  slip: any[] = [];

  events: any[] = [
    {
      id: 1,
      ht: 'Liverpool',
      at: 'Chelsea',
      odds: [1.57, 3.15, 2.86]
    },
    {
      id: 2,
      ht: 'Man Utd',
      at: 'Tottenham',
      odds: [1.83, 3.25, 2.92]
    },
    {
      id: 3,
      ht: 'Lecister',
      at: 'Stoke City',
      odds: [1.44, 2.87, 3.44]
    },
  ];

  @Output() addMatchToSlip = new EventEmitter();

  addToSlip(e, odd, i) {
    var p;
    if (i === 0) { p = e.ht } else if (i === 1) { p = 'Draw' } else if (i === 2) { p = e.at }
    let newEvent = { event: e, odd: odd, prediction: p};
    let index = this.slip.findIndex(x => x.event.id === e.id);
    if(index === -1) { this.slip.splice(0, 0, newEvent); } else {
      this.slip[index].odd = odd;
      this.slip[index].prediction = p;
    };
    let oddsTotal = this.slip.oddsTotal();
    let object = { bets: this.slip, total: oddsTotal }
    this.addMatchToSlip.emit(object);
    console.log(object);
  }
}
