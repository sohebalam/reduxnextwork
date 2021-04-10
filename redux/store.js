import { createStore,  applyMiddleware, compose } from "redux"
import rootReducer from './rootReducer'
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {createWrapper} from 'next-redux-wrapper'

const middleware = [thunk]

const initialState ={}

const makeStore =()=> createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export const  wrapper = createWrapper(makeStore)