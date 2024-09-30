import React, { useEffect, useState } from "react";
import { LoginContainer, LoginHeader, StyledCard } from "./loginStyle";
import { useFormik } from 'formik';
import FAInput from "../../components/FAInput/FAInput";
import FAButton from "../../components/FAButton/FAButton";
import loginValidationSchema from "./loginValidationSchema";
import { getSessionStorageData, setSessionStorageData } from "../../utility/localStorageUtility";
import { isEmpty } from "lodash";
import FALoading from "../../components/FALoading/FALoading";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../utility/constants";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
        },
        validationSchema: loginValidationSchema,
        onSubmit: values => {
            setLoading(true)
            setSessionStorageData(LOGIN, values)
            setTimeout(() => {
                navigate("/dashboard")
                setLoading(false)
            }, 1000)
        },
    });

    useEffect(() => {
        setLoading(true)
        checkLoginDataExists()
    }, [])

    const checkLoginDataExists = () => {
        const data = getSessionStorageData(LOGIN)
        if (!isEmpty(data)) {
            navigate("/dashboard")
        }
        setLoading(false);
    }

    return (
        <LoginContainer >
            <FALoading open={loading} />
            <StyledCard >
                <LoginHeader>
                    Login
                </LoginHeader>
                <FAInput name="id" id="id" onChange={formik.handleChange} placeholder="Id" />
                <FAInput name="name" id="name" onChange={formik.handleChange} placeholder="Name" />
                <FAButton onClick={formik.handleSubmit} btnText="Login" width="100%" height="40px" />
            </StyledCard>
        </LoginContainer>
    )
}

export default Login;