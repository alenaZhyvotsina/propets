import postsReducer from "../reducers/postsReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const initialState = {
    imgLink: '',
    errorMessage: ''
}

const store = createStore(postsReducer, initialState, applyMiddleware(thunk));

export default store;