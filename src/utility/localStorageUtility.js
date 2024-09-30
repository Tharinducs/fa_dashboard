
const setData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

const setSessionStorageData = (key,data) => {
    sessionStorage.setItem(key, JSON.stringify(data))
}

const getData = (key) => {
    const data = localStorage.getItem(key)
    console.log(data,"data")
    if (data) {
        return JSON.parse(data)
    } else {
        return null;
    }
}

const getSessionStorageData = (key) => {
    const data = sessionStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
    } else {
        return null;
    }
}

const removeItem  = (key) => {
    localStorage.removeItem(key);
}

const removeSessionstorageItem = (key) => {
    sessionStorage.removeItem(key)
}

const clearStorage = () => {
    localStorage.clear()
}

export {
    setData,
    getData,
    clearStorage,
    removeItem,
    getSessionStorageData,
    setSessionStorageData,
    removeSessionstorageItem
}