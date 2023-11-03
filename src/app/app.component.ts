import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addGreeting } from './actions/greeting.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'traveler';
  greetings$ = this.store.select('greetings');

  constructor(private store: Store<{ greetings: string[] }>) {}

  addGreeting() {
    this.store.dispatch(addGreeting({ greeting: `Greetings, ${this.name}!` }));
  }
}
