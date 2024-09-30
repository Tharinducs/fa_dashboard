import styled from 'styled-components';
import { Avatar, Button } from 'antd';
import { size } from '../../styles/constants';

const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff; 
  padding: 0 20px;
  box-shadow: 0 1px 4px #00000029; 
  height: 72px; 

  
  @media (max-width: ${size.tablet}) {
    padding: 0 10px !important;  
  }
`;


const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;


const StyledAvatar = styled(Avatar)`
    width: 40px;
    height: 40px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Username = styled.span`
  font-size: 18px;
  color: #555;
  margin-left: 12px;

  @media (max-width: 768px) {
    font-size: 16px; 
    margin-left: 8px;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  font-size: 16px;
  color: #555;

  @media (${size.tablet}) {
    font-size: 14px;
  }
`;

export {
    StyledAvatar,
    StyledButton,
    NavbarRight,
    NavbarContainer,
    Username,
    NavbarLeft
}
