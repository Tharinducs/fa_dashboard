import React from "react";
import { DashboardEmptyCard, DashboardEmptyContainer, DashboardEmptyTitle } from "./dashboardStyle";
import FAButton from "../../components/FAButton/FAButton";

const DashbordEmpty = ({ onClick }) => {
    return <DashboardEmptyContainer>
        <DashboardEmptyCard>
            <DashboardEmptyTitle>You have no task.</DashboardEmptyTitle>
            <FAButton onClick={() => onClick(true)} btnText="+ New Task" width="124px" height="35px" />
        </DashboardEmptyCard>
    </DashboardEmptyContainer>
}

export default DashbordEmpty