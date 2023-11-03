import { createReducer, on } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { addGreeting, removeGreeting } from '../actions/greeting.actions';

export const initialState: string[] = [];

const _greetingReducer = createReducer(
  initialState,
  on(addGreeting, (state, { greeting }) => [...state, greeting]),
  on(removeGreeting, (state, { index }) => {
    const newState = [...state];
    newState.splice(index, 1);
    return newState;
  }),
);

export function greetingReducer(
  state: string[] = initialState,
  action: Action,
) {
  return _greetingReducer(state, action);
}
