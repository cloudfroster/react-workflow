import React from 'react'
import ReactDOM from 'react-dom'
import normalize from 'normalize.css'
import base from './theme/base.less'
import {createHistory} from 'history'
import routes from './routes'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {reduxReactRouter, routerStateReducer, ReduxRouter} from 'redux-router'

function rootReducer(state={}, action) {
  switch(action.type) {
    case 'OK' :
    alert('ok')
    return state
    default:
    setTimeout(()=>{
      console.log(store.getState())
    },300)
    return state
  }
}

const reducer = combineReducers({
  router: routerStateReducer,
  app: rootReducer, //you can combine all your other reducers under a single namespace like so
});

const store = compose(
  applyMiddleware(),

  reduxReactRouter({
    routes,
    createHistory,
  }),

  //devTools()
)(createStore)(reducer);


ReactDOM.render((
  <Provider store={store}>
    {/* 修复初始预警错误 */}
    <ReduxRouter
                routes={[]}
                location={{}}
                params={{}}
                components={[]}
            />
    }
  </Provider>
),document.getElementById('app'));

// must accept hot reload
if(module.hot) {
	module.hot.accept();
}
