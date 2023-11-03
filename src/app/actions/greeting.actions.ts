import { createAction, props } from '@ngrx/store';

export const addGreeting = createAction(
  '[Greeting] Add Greeting',
  props<{ greeting: string }>(),
);

export const removeGreeting = createAction(
  '[Greeting] Remove Greeting',
  props<{ index: number }>(),
);

export const logGreeting = createAction(
  '[Greeting] Log Greeting',
  props<{ message: string }>(),
);
