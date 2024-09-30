import { Button } from "antd";
import styled from "styled-components";

const StyledButton = styled(Button)`
   background: #5285EC 0% 0% no-repeat padding-box;
   border-radius: 8px;
   border-color: #5285EC;
   opacity: 1;
   color: #FFFFFF;
   width: ${(props) => (props.width)};
   height: ${(props) => (props.height)};
`

export {
    StyledButton
}