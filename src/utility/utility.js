import { TASKS } from "./constants"
import { setData } from "./localStorageUtility"


export const setTaskDataToStorage = (userId, tasks) => {
    const storageData = { userId, tasks }
    setData(TASKS, storageData)
}