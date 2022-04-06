import { useState } from "react"

const useForm = (initialValues, submit, validations) =>{
    const [values, setValues] = useState(initialValues)
    const handleKeyUp = (e) =>{
    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        submit();
    }
    return{
        handleKeyUp, handleSubmit, values, errors
    }
    


}

export default useForm