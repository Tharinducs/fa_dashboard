import { setTaskDataToStorage } from '../../utility/utility'
import * as actionTypes from './actionTypes'
import { v4 as uuidv4 } from 'uuid';

export const setTasks = (data) => {
    return {
        type: actionTypes.SET_TASKS_DATA,
        tasks: data
    }
}

export const clearData = () =>{
    return {
        type: actionTypes.CLEAR_TASK_DATA,
    }
}

export const clearTaskData = () => {
    return dispatch => {
        dispatch(clearData())
    }
}


export const addTask = ({task, tasks = [], userId}) => {
    return async dispatch => {
        const data = {...task,id:uuidv4()}
        tasks.push(data);
        dispatch(setTasks(tasks))
        setTaskDataToStorage(userId,tasks)
    }
}

export const updateTask = ({task,tasks=[],userId}) =>{
    return async dispatch => {
        const updatedTasks = tasks.map((item)=>{
            if(item.id=== task.id){
                return task
            }else{
                return item;
            }
        });
        dispatch(setTasks(updatedTasks))
        setTaskDataToStorage(userId,updatedTasks)
    }
}

export const deleteTask = ({id,tasks=[],userId}) => {
    return async dispatch => {
        let index = tasks.map((item)=>(item.id)).indexOf(id)
        tasks.splice(index,1);
        dispatch(setTasks(tasks))
        setTaskDataToStorage(userId,tasks)
    }
}