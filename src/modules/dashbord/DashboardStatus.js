import React from "react";
import { Col } from "antd";
import { StyledDashboardStatusRow, StyledDashboardStatusCard, StyledDashboardStatusCardTitle, NumberWrapper, LargeNumber, SmallNumber, StyledUl, StyledLi } from "./dashboardStyle";
import { get } from "lodash";
import Chart from "./Chart";

const DashboardStatus = ({ tasks = [] }) => {
    const getCompletedTasks = () => {
        return tasks.filter((item) => get(item, "status", 0)).length
    }

    const getLatestTasks = () => {
        return [...tasks.slice(Math.max(tasks.length - 3, 0))].reverse();
    }

    return (
        <StyledDashboardStatusRow gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <StyledDashboardStatusCard>
                    <StyledDashboardStatusCardTitle>Tasks Completed</StyledDashboardStatusCardTitle>
                    <NumberWrapper>
                        <LargeNumber>{getCompletedTasks()}</LargeNumber>
                        <SmallNumber>/ {tasks.length}</SmallNumber>
                    </NumberWrapper>
                </StyledDashboardStatusCard>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <StyledDashboardStatusCard>
                    <StyledDashboardStatusCardTitle>Latest Created Tasks</StyledDashboardStatusCardTitle>
                    <StyledUl>{getLatestTasks().map((item, index) => <StyledLi key={index} completed={get(item, "status", 0)}>{get(item, "name", "")}</StyledLi>)}</StyledUl>
                </StyledDashboardStatusCard>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <StyledDashboardStatusCard center="true">
                    <Chart tasks={tasks} />
                </StyledDashboardStatusCard>
            </Col>
        </StyledDashboardStatusRow>
    )
}

export default React.memo(DashboardStatus);