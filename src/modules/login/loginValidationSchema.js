import * as Yup from 'yup'

const loginValidationSchema = Yup.object().shape({
    id:Yup.string().required("This Feild is Required!"),
    name:Yup.string().required("This Feild is Required!")
})


export default loginValidationSchema