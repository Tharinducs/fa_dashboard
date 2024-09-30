import React from 'react';
import { TaskListWrapper, TaskCheckbox, TaskItem, TaskText, ActionIcons } from './dashboardStyle';
import { Image } from 'antd';
import Icon from '@ant-design/icons/lib/components/Icon';
import { get } from 'lodash';

const DashboardTaskList = ({ tasks=[], removeTask, setOpenAddEditTaskModal, setRowData,completeTheTask }) => {
  const getTasksReverse = () => {
    return [...tasks].reverse()
  }
  return (
    <TaskListWrapper>
      {getTasksReverse().map((task, index) => (
        <TaskItem key={index}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TaskCheckbox
              onChange={(e)=>completeTheTask(e,task)}
              checked={get(task, "status", 0)}
              completed={get(task, "status", 0)}
              disabled={get(task, "status", 0) == 1}
            />
            <TaskText completed={get(task, "status", 0)}>{get(task, "name")}</TaskText>
          </div>
          <ActionIcons>
            <Icon onClick={() => {
              setRowData({ ...task })
              setOpenAddEditTaskModal(true)
            }} component={() => <Image width={18} height={18} preview={false} src={require("../../assets/images/pen-solid.png")} />} ></Icon>
            <Icon onClick={() => removeTask(task.id)} component={() => <Image width={18} height={18} preview={false} src={require("../../assets/images/trash-solid.png")} />} ></Icon>
          </ActionIcons>
        </TaskItem>
      ))}
    </TaskListWrapper>
  );
};

export default DashboardTaskList;
