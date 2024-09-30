import { StyledInput } from "./FAInputStyles";

const FAInput = ({ placeholder, onChange, type, name, id,value }) => {
    return <StyledInput value={value} name={name} id={id} onChange={onChange} type={type} placeholder={placeholder} variant="filled" />
}

export default FAInput