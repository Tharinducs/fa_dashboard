import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { NavbarContainer, NavbarLeft, StyledAvatar, Username, NavbarRight, StyledButton } from './FANavBarStyle';
import { getSessionStorageData, removeSessionstorageItem } from '../../utility/localStorageUtility';
import { LOGIN } from '../../utility/constants';
import { get } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearTaskData } from '../../store/actions/tasks';

const Navbar = ({clearTasks}) => {
    const navigate = useNavigate();

    const getUserName = () => {
       const data = getSessionStorageData(LOGIN);
       return get(data,"name","")
    }
    const handleLogout = () => {
       removeSessionstorageItem(LOGIN)
       clearTasks()
       navigate("/")
    }

    return (
        <NavbarContainer>
            <NavbarLeft>
                <StyledAvatar
                    size={48}
                    src={require("../../assets/images/profile.png")}
                    icon={<UserOutlined />}
                />
                <Username>{getUserName()}</Username>
            </NavbarLeft>
            <NavbarRight>
                <StyledButton onClick={()=>{
                    handleLogout()
                }} type="text">Logout</StyledButton>
            </NavbarRight>
        </NavbarContainer>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearTasks:() => dispatch(clearTaskData())
    }
}

export default connect(null,mapDispatchToProps)(Navbar);