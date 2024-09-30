import { init } from "@rematch/core";
import { thunk } from 'redux-thunk'
import { CLEAR_ALL } from "./actions/actionTypes";
import taskReducer from "./reducers/tasks"

const reducers = {
    task:taskReducer
}

const middlewares = [thunk]

const store = init({
    redux: {
        middlewares,
        reducers,
        rootReducers: {
            [CLEAR_ALL]: () => undefined
        }
    }
})

export const { select, dispatch, getState } = store;

export default store;