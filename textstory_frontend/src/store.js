import { createStore, applyMiddleware} from "redux";
import {rootReducer} from './reducers/ROOTREDUCER';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';



//CONTAINS ROOT REDUCER


const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(thunk))

)




export default store