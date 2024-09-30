import React from 'react';
import {  Modal } from 'antd';
import useIsMobile from '../../hooks/useIsMobile';
import { StyledDashboardAddEditTaskModalTitle } from './dashboardStyle';
import FAInput from '../../components/FAInput/FAInput';
import FAButton from '../../components/FAButton/FAButton';
import { get, isEmpty } from 'lodash';
import { useFormik } from 'formik';
import taskValidationSchema from './taskValidationSchema';

const DashboardAddTaskEditModal = ({ openModal, submitTask, editTask, rowData }) => {
    const isMobile = useIsMobile()
    const formik = useFormik({
        initialValues: {
            id: get(rowData, "id", ""),
            name: get(rowData, "name", ""),
            status: get(rowData, "status", "")
        },
        enableReinitialize: true,
        validationSchema: taskValidationSchema,
        onSubmit: (values, { resetForm }) => {
            if (isEmpty(rowData)) {
                submitTask({
                    ...values,
                    status: 0
                })
                resetForm()
            } else {
                editTask({
                    ...rowData, ...values
                })
                resetForm()
            }

        },
    });

    return (
        <Modal closable={false} width={!isMobile ? 296 : '100%'} centered={!isMobile} title={<StyledDashboardAddEditTaskModalTitle>+ New Task</StyledDashboardAddEditTaskModalTitle>} open={openModal} footer={null}>
            <FAInput value={formik.values.name} type="text" placeholder="Task Name" id="name" name="name" onChange={formik.handleChange} />
            <FAButton width="100%" height="40px" btnText={isEmpty(rowData) ? "+ New Task" : "Update Task"} onClick={formik.handleSubmit} />
        </Modal>
    )
}

export default DashboardAddTaskEditModal;