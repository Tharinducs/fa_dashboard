import { StyledButton } from "./FAButtonStyle"

const FAButton = ({ btnText, width, height, onClick }) => {
    return <StyledButton onClick={() => onClick()} width={width} height={height}>{btnText}</StyledButton>
}

export default FAButton;