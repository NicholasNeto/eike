import { createStore } from 'redux'

function application(state = {context: {}}, action) {
  switch (action.type) {
    case 'CHANGE_CONTEXT':
      return state = {...state, context: action.context};
    default:
      return state;
  }
}

const store = createStore(application, {});

store.dispatch({
    type: 'CHANGE_CONTEXT',
    context: {myContext: ''}
});

export default store;
window.eike = {};
window.eike.store = store;

console.log(store.getState());
// [ 'Use Redux', 'Read the docs' ]