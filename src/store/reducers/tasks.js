import { isEmpty } from "lodash";
import { getData, getSessionStorageData, removeItem, setData } from "../../utility/localStorageUtility";
import * as actionTypes from "../actions/actionTypes"
import { LOGIN, TASKS } from "../../utility/constants";

export const getInitialState = () => {
    return {
        tasks: []
    }
}

let savedState;
try {
    const savedTaskData = getData(TASKS);
    console.log(savedTaskData, "sa")
    if (!isEmpty(savedTaskData)) {
        const getUserData = getSessionStorageData(LOGIN)
        console.log(getUserData, "hhhh", savedTaskData.userId, getUserData.id, "llll", savedTaskData.userId !== getUserData.id)
        if (savedTaskData.userId !== getUserData.id) {
            removeItem(TASKS)
        } else {
            savedState = { tasks: savedTaskData.tasks }
        }
    }
    const initialState = getInitialState();
    savedState = {
        ...initialState,
        ...savedState
    }
} catch (err) {
    //ignore
}

export default (state = savedState || getInitialState(), action = {}) => {
    switch (action.type) {
        case actionTypes.SET_TASKS_DATA: {
            return {
                ...state,
                tasks: [...action.tasks]
            }
        }
        case actionTypes.CLEAR_TASK_DATA: {
            return {
                ...state,
                tasks: []
            }
        }
        default:
            return state
    }
}