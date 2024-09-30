import styled from "styled-components";
import { size } from "../../styles/constants";
import { Card, Modal, Row, Checkbox, Typography, Input } from "antd";

const { Text } = Typography;

const DashboardEmptyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';

  @media (max-width: ${size.tablet}) {
    justify-content: left;
    align-items: flex-start ;
  }
`

const DashboardEmptyCard = styled(Card)`
    justify-content: center;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0000000A;
    opacity: 1;
    margin-top: 10px;
    width: 100%;
    text-align: center;
    height: 158px;
    padding-bottom: 37px;

    @media (min-width: ${size.tablet}) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 304px;
    }
`

const DashboardEmptyTitle = styled.div`
    margin-top: 17px;
    margin-bottom: 20px;
    font-size: 20px;
    color: #537178;
    text-align: center;
    letter-spacing: 0px;
`
const StyledDashboardAddEditTaskModalContainer = styled.div`
    margin-top: -10px;
`

const StyledDashboardAddEditTaskModalTitle = styled.div`
    text-align: left;
    font-size: 20px;
    letter-spacing: 0px;
    color: #537178;
    opacity: 1;
`

const NumberWrapper = styled.div`
  display: flex;
  align-items: baseline; 
  font-family: 'Arial', sans-serif;
`;

const LargeNumber = styled(Text)`
  font-size: 64px;  
  color: #5285EC;  
  font-weight: bold;
`;

const SmallNumber = styled(Text)`
  font-size: 20px;
  color: #A0A0A0;  
  margin-left: 5px; 
`;

const StyledUl = styled.ul`
  padding-inline-start: 10px !important;
  letter-spacing: 0px;
  color: #8F9EA2;
  opacity: 1;
`

const StyledLi = styled.li`
    ${({ completed }) => completed && `
        text-decoration: line-through;
        color: gray;
        text-decoration-thickness: 2px;
    `}
`

const StyledDashboardStatusRow = styled(Row)`
  margin-top: 22px;
  margin-bottom: 44px;
  padding-left: 120px;
  padding-right: 120px;
  margin-left: 0px !important; 
  margin-right: 0px !important;
  
  @media (max-width: ${size.tablet}) {
    padding-left: 0px;
    padding-right: 0px;
  }
`

const StyledDashboardStatusCard = styled(Card)`
    height: 158px;
    box-shadow: 0px 3px 6px #0000000A;
    border-radius: 12px;
    background-color: #fff;
    margin-bottom:0px;

    ${({ center }) => center && `
        padding-left : 100px
    `}

    @media (max-width: ${size.tablet}) {
     margin-bottom: 8px;
  }
`

const StyledDashboardStatusCardTitle = styled.div`
    text-align: left;
    letter-spacing: 0px;
    color: #537178;
    opacity: 1;
    font-size: 20px;
`

const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 100%;
  margin-left: 136px;
  margin-right: 136px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: ${size.tablet}) {
    max-width: 100% !important;
    margin-left: 0px !important;
    margin-right: 0px !important;
  }
`;

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const TaskText = styled(Text)`
  font-size: 16px;
  margin-left: 10px;
  color: #5285EC;

  ${({ completed }) => completed && `
    text-decoration: line-through;
    color: #537178;
  `}
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 35px;
`;

const TaskCheckbox = styled(Checkbox)`
  margin-right: 10px;
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #fff; 
    border: 2px solid #95A4AB;
  }

  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
    border: 2px solid #95A4AB;
  }

  .ant-checkbox-checked::after {
    border: 3px solid red;
  }
`;

const Chartwrapper = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center;
    flex-direction: column;
`

const ChartWrapperInternal = styled.div`
    position: relative;
`

const ChartOuter = styled.div`
    width: 103px; 
    height: 103px;
`

const TaskHeader = styled(Row)`
  padding: 20px;
  background-color: #f5f5f5;
  margin-left: 0px !important;
  margin-right: 0px !important;
  padding-left: 120px !important;
  padding-right: 120px !important;

  @media (max-width: ${size.tablet}) {
    padding-left: 0px !important;
    padding-right: 0px !important;
    text-align: center;
  }
`;

const TaskTitle = styled.div`
  font-size: 20px;
  color: #537178;
  margin: 0;

  @media (max-width: ${size.tablet}) {
    margin-bottom: 10px;
  }
`;

const StyledInput = styled(Input.Search)`
  width: 290px;
  margin-right:20px;
  
  .ant-input-group-addon {
    display: none;
  }

  .ant-input-affix-wrapper {
    border-radius: 8px !important;
    border: none !important;
    background-color: #D9DFEB ;
    height: 40px;
  }

  @media (max-width: ${size.tablet}) {
    margin-bottom: 10px;
    width: 100%;
  }
`;


export {
    DashboardEmptyContainer,
    DashboardEmptyCard,
    DashboardEmptyTitle,
    StyledDashboardAddEditTaskModalContainer,
    StyledDashboardAddEditTaskModalTitle,
    StyledDashboardStatusRow,
    StyledDashboardStatusCard,
    TaskListWrapper,
    TaskItem,
    TaskText,
    ActionIcons,
    TaskCheckbox,
    StyledDashboardStatusCardTitle,
    NumberWrapper,
    LargeNumber,
    SmallNumber,
    StyledUl,
    StyledLi,
    Chartwrapper,
    ChartWrapperInternal,
    ChartOuter,
    TaskHeader,
    TaskTitle,
    StyledInput
}