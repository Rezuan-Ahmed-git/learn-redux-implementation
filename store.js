const createStore = (reducer, init) => {
  const store = {};
  store.state = init;
  store.listeners = [];

  store.getState = () => store.state;

  store.subscribe = (listener) => store.listeners.push(listener);

  store.dispatch = (action) => {
    store.state = reducer(store.state, action);
    store.listeners.forEach((listener) => listener());
  };

  return store;
};

//Uses of our redux store

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      return state + action.payload;
    }

    case 'SUB': {
      return state - action.payload;
    }

    default:
      return state;
  }
};

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: 'ADD', payload: 100 });
store.dispatch({ type: 'SUB', payload: 300 });
store.dispatch({ type: 'ADD', payload: 30 });
store.dispatch({ type: 'ADD', payload: 25 });
