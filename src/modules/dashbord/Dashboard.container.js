import React, { useEffect, useState } from "react";
import Navbar from "../../components/FANavBar/FANavBar";
import DashbordEmpty from "./DashboardEmpty";
import { connect } from "react-redux";
import { addTask, deleteTask, updateTask } from "../../store/actions/tasks";
import DashboardAddTaskEditModal from "./DashboardAddTaskEditModal";
import FALoading from "../../components/FALoading/FALoading";
import { getSessionStorageData } from "../../utility/localStorageUtility";
import { LOGIN } from "../../utility/constants";
import { get, isEmpty } from "lodash";
import DashboardStatus from "./DashboardStatus";
import DashboardTaskList from "./DashboardTaskList";
import TaskHeaderComponent from "./TaskHeader";

const DashboardContainer = ({ tasksData = [], addTaskAction, updateTaskAction, deleteTaskAction }) => {
    const [openAddEditTaskModal, setOpenAddEditTaskModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const [userId, setUserId] = useState(null)
    const [rowData, setRowData] = useState(null)
    const [tasks, setTasks] = useState([])
    const [searchData, setSearchData] = useState("")

    useEffect(() => {
        const userData = getSessionStorageData(LOGIN);
        if (!isEmpty(userData)) {
            const loggedId = get(userData, "id", null)
            setUserId(loggedId)
        }
    }, [])

    useEffect(() => {
        setTasks([...tasksData])
        if (!isEmpty(searchData)) {
            setSearchData("")
        }
    }, [tasksData])

    const submitTask = (values) => {
        setLoading(true)
        addTaskAction({ task: values, tasks: tasksData, userId })
        setOpenAddEditTaskModal(false)
        clearLoading()
    }

    const clearLoading = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    const editTask = (values) => {
        setLoading(true)
        updateTaskAction({ task: values, tasks: tasksData, userId })
        setOpenAddEditTaskModal(false)
        setRowData(null)
        clearLoading()
    }

    const completeTheTask = (e, values) => {
        const updatedValues = { ...values, status: e.target.checked ? 1 : 0 }
        editTask(updatedValues)
    }

    const removeTask = (index) => {
        setLoading(true)
        deleteTaskAction({ index, tasks: tasksData, userId })
        clearLoading()
    }

    const searchTask = (data) => {
        setSearchData(data)
        if (!isEmpty(data)) {
            const filteredData = tasks.filter(task => task.name.toLowerCase().includes(data.toLowerCase()))
            setTasks([...filteredData])
        }
        else {
            setTasks([...tasksData])
        }

    }

    const handleChangeSearch = (e) => {
        setSearchData(e.target.value);
    }

    return <>
        <Navbar />
        <FALoading open={loading} />
        {tasks.length === 0 && isEmpty(searchData) && <DashbordEmpty onClick={setOpenAddEditTaskModal} />}
        {tasks && tasks.length > 0 &&
            <>
                <DashboardStatus tasks={tasks} />
                <TaskHeaderComponent searchData={searchData} handleChangeSearch={handleChangeSearch} onSearch={searchTask} onClick={setOpenAddEditTaskModal} />
                <DashboardTaskList completeTheTask={completeTheTask} setOpenAddEditTaskModal={setOpenAddEditTaskModal} setRowData={setRowData} removeTask={removeTask} tasks={tasks} />
            </>
        }
        <DashboardAddTaskEditModal rowData={rowData} submitTask={submitTask} editTask={editTask} openModal={openAddEditTaskModal} />
    </>
}

const mapStateToProps = state => ({
    tasksData: state.task.tasks
})


const mapDispatchToProps = (dispatch) => {
    return {
        addTaskAction: data => dispatch(addTask(data)),
        updateTaskAction: data => dispatch(updateTask(data)),
        deleteTaskAction: data => dispatch(deleteTask(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);