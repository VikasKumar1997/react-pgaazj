import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import Reducer from './reducer';
import rootSaga from './saga';


export default function(InitialState = InitialState){
    const sagaMiddleware = createSagaMiddleware();

    const middlewares=composeWithDevTools(applyMiddleware(sagaMiddleware))

    const store= createStore(Reducer, InitialState, middlewares)

    return { ...store, sagaTask: sagaMiddleware.run(rootSaga) };
}