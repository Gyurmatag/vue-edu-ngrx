import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import * as greetingActions from '../actions/greeting.actions';

@Injectable()
export class GreetingEffects {

  addGreeting$ = createEffect(() => this.actions$.pipe(
    ofType(greetingActions.addGreeting),
    mergeMap(action => of(action).pipe(
      map(() => greetingActions.logGreeting({ message: `Greeting added: ${action.greeting}` }))
    ))
  ));

  constructor(private actions$: Actions) {}
}