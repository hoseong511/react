import { SHOW_ALL, SHOW_COMPLETE } from "../actions";

const filterInitialState = 'ALL';

export default function filter(prevState=filterInitialState, action) {
  if (action.type === SHOW_ALL) return 'ALL';
  if (action.type === SHOW_COMPLETE) return 'COMPLETE';
  return prevState;
}