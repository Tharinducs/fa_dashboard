import * as Yup from 'yup'

const taskValidationSchema = Yup.object().shape({
    name:Yup.string().required("This Feild is Required!")
})


export default taskValidationSchema