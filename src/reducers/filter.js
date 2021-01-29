import { CHANGE_FILTER } from '../action-types';

const filterReducer = (state = 'All', action) => {
    switch (action.type) {
      case CHANGE_FILTER:
        return action.value
      default:
        return state;
    }
  };
  
  export default filterReducer;