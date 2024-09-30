import styled from "styled-components";
import { Card } from "antd";
import { size } from "../../styles/constants";

const StyledCard = styled(Card)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 12px;
    opacity: 1;
    width: 350px;
    padding-right: 4px;
    padding-bottom: 9px;

    @media (max-width: ${size.mobile}) {
        max-width: 100%;
        text-align: center;
    }
`

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    font-family: 'Montserrat';

  @media (max-width: ${size.mobile}) {
    padding: 0 10px; 
  }
`

const LoginHeader = styled.div`
    text-align: left;
    letter-spacing: 0px;
    color: #537178;
    opacity: 1;
    font-size: 20px;
    margin-bottom: 24px;
`

export {
    StyledCard,
    LoginContainer,
    LoginHeader
}