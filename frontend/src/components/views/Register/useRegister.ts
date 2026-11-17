import { useState } from "react"
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { IRegister } from "@/types/Auth"
import authServices from "@/services/auth"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"

const useRegister = () => {
    const router = useRouter()
    const [visiblePassword, setVisiblePassword] = useState({
        password: false,
        confirmPassword: false
    })

    const registerSchema = yup.object().shape({
        fullName: yup.string().required("Please input your fullname."),
        username: yup.string().required("Please input your username."),
        email: yup.string().email("Email format not valid").required("Please input your email."),
        password: yup.string().min(8, "Minimal 8 characters").required("Please input your password"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), ""], "Password not match.").required("Please input your password confirmation")
    })

    const handleVisiblePassword = (key: "password" | "confirmPassword") => {
        setVisiblePassword({
            ...visiblePassword,
            [key]: !visiblePassword[key]
        })
    }

    const {control, handleSubmit, formState: {errors}, reset, setError} = useForm({
        resolver: yupResolver(registerSchema)
    })

    const registerServices = async (payload: IRegister) => {
        const result = await authServices.register(payload)
        return result;
    } 

    const {mutate: mutateRegister, isPending: isPendingRegister} = useMutation({
        mutationFn: registerServices,
        onError(error){
            setError("root", {
                message: error.message
            })
        },
        onSuccess: () => {
            router.push('/auth/register/success')
            reset()
        }
    })

    const handleRegister = (data: IRegister) => {
        console.log(data)
        mutateRegister(data)
    }

    return {
        visiblePassword,
        handleVisiblePassword,
        control,
        handleSubmit,
        handleRegister,
        isPendingRegister,
        errors
    }
}

export default useRegister