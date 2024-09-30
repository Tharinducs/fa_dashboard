import React from 'react';
import FAButton from "../../components/FAButton/FAButton";
import { TaskHeader, TaskTitle, StyledInput } from './dashboardStyle';
import useIsMobile from '../../hooks/useIsMobile';
import { SearchOutlined } from '@ant-design/icons';
import { Col } from 'antd';

const TaskHeaderComponent = ({ onClick,onSearch,handleChangeSearch,searchData }) => {
    const isMobile = useIsMobile();
    return (
        <TaskHeader gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <TaskTitle>Tasks</TaskTitle>
            </Col>
            <Col xs={24} sm={24} md={24} lg={9} xl={9}>
            </Col>
            <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <StyledInput value={searchData} onChange={handleChangeSearch} onSearch={(data)=>onSearch(data)} allowClear prefix={<SearchOutlined width={16} />} suffix={null} placeholder="Search by task name" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={3} xl={3}>
                <FAButton onClick={() => onClick(true)} height="40px" width={isMobile ? "100%" : "120px"} btnText="+ New Task" />
            </Col>
        </TaskHeader>
    );
};

export default TaskHeaderComponent;
