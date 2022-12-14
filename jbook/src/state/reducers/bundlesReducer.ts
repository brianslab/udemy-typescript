import produce from 'immer';
import { ActionType } from '../action_types';
import { Action } from '../actions';

interface BundlesState {
  [key: string]: {
    loading: boolean;
    code: string;
    err: string;
  };
}

const initialState: BundlesState = {};

const reducer = produce(
  (state: BundlesState = initialState, action: Action): BundlesState => {
    switch (action.type) {
      case ActionType.BUNDLE_START: {
        state[action.payload.cellID] = { loading: true, code: '', err: '' };
        return state;
      }
      case ActionType.BUNDLE_COMPLETE: {
        state[action.payload.cellID] = {
          loading: false,
          code: action.payload.bundle.code,
          err: action.payload.bundle.err,
        };
        return state;
      }
      default:
        return state;
    }
  },
  initialState
);

export default reducer;
