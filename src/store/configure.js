// https://github.com/diegohaz/arc/wiki/Redux-modules
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

// console.log(process.env);

const devtools = window.devToolsExtension && process.env.NODE_ENV === "development"
  ? window.devToolsExtension
  : () => (fn) => fn;

const configureStore = (initialState) => {

  const enhancers = [
    applyMiddleware(thunk),
    devtools(),
  ]

  const store = createStore(reducer, initialState, compose(...enhancers))

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore
