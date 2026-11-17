import { Card, Input, InputGroup, Button, Spinner, TextField, FieldError } from "@heroui/react"
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Image from "next/image"
import Link from "next/link"
import useRegister from "./useRegister"
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";

const Register = () => {
    const {visiblePassword, handleVisiblePassword, control, handleRegister, handleSubmit, isPendingRegister, errors} = useRegister()

    return (
        <>
            <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
                <div className="flex w-full lg:w-1/3 flex-col items-center justify-center gap-10">
                    <Image 
                        src="/images/general/logo.svg"
                        alt="logo"
                        width={180}
                        height={100}
                        style={{ width: 'auto', height: 'auto' }}
                        priority
                    />
                    <Image 
                        src="/images/illustration/login.svg"
                        alt="login"
                        className="w-2/3 lg:w-full"
                        width={1024}
                        height={1024}
                        priority
                    />
                </div>
                <Card variant="default" className="shadow-md/20 border border-gray-100">
                    <Card.Content className="p-8">
                        <h2 className="text-lg font-bold text-red-500">Create Account</h2>
                        <p className="text-small mb-4">Have an account?&nbsp;
                            <Link href="/auth/login" className="font-semibold text-red-400">
                                Login
                            </Link>
                        </p>
                        {errors.root && (
                            <p className="mb-2 font-medium text-danger">{errors?.root?.message}</p>
                        )}
                        <form className={cn("flex w-80 flex-col", Object.keys(errors).length > 0 ? "gap-4" : "gap-2")} onSubmit={handleSubmit(handleRegister)}>
                            <Controller name="fullName" control={control} render={({field}) => (
                                <TextField {...field}  fullWidth isInvalid={errors.fullName != undefined} type="text" aria-label="Fullname">
                                    <Input placeholder="Fullname"/>
                                    <FieldError>{errors.fullName?.message}</FieldError>
                                </TextField>
                            )}/>
                            <Controller name="username" control={control} render={({field}) => (
                                <TextField {...field}  fullWidth isInvalid={errors.username != undefined} type="text" aria-label="Username">
                                    <Input placeholder="Username"/>
                                    <FieldError>{errors.username?.message}</FieldError>
                                </TextField>
                            )}/>
                            <Controller name="email" control={control} render={({field}) => (
                                <TextField {...field}  fullWidth isInvalid={errors.email != undefined} type="text" aria-label="Email address">
                                    <Input placeholder="Email"/>
                                    <FieldError>{errors.email?.message}</FieldError>
                                </TextField>
                            )}/>
                            <Controller name="password" control={control} render={({field}) => (
                                <TextField {...field}  fullWidth isInvalid={errors.password != undefined} type="text" aria-label="Password">
                                    <InputGroup>
                                        <InputGroup.Input
                                        {...field}
                                        type={visiblePassword.password ? "text" : "password"}
                                        placeholder="Password"
                                        />
                                        <InputGroup.Suffix>
                                        <button
                                            className="focus:outline-none"
                                            type="button"
                                            onClick={() => handleVisiblePassword("password")}
                                        >
                                            {visiblePassword.password ? (
                                            <FaEyeSlash className="text-xl text-default-400" />
                                            ) : (
                                            <FaEye className="text-xl text-default-400" />
                                            )}
                                        </button>
                                        </InputGroup.Suffix>
                                    </InputGroup>
                                    <FieldError>{errors.password?.message}</FieldError>
                                </TextField>
                            )}/>
                            <Controller name="confirmPassword" control={control} render={({field}) => (
                                <TextField {...field}  fullWidth isInvalid={errors.confirmPassword != undefined} type="text" aria-label="Password confirmation">
                                    <InputGroup>
                                        <InputGroup.Input
                                        {...field}
                                        type={visiblePassword.confirmPassword ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        />
                                        <InputGroup.Suffix>
                                        <button
                                            className="focus:outline-none"
                                            type="button"
                                            onClick={() => handleVisiblePassword("confirmPassword")}
                                        >
                                            {visiblePassword.confirmPassword ? (
                                            <FaEyeSlash className="text-xl text-default-400" />
                                            ) : (
                                            <FaEye className="text-xl text-default-400" />
                                            )}
                                        </button>
                                        </InputGroup.Suffix>
                                    </InputGroup>
                                    <FieldError>{errors.confirmPassword?.message}</FieldError>
                                </TextField>
                            )}/>
                            
                            <Button type="submit" className="min-w-full" variant="danger">
                                {isPendingRegister ? (
                                    <Spinner color="current" size="sm" />
                                ) : "Register"}
                            </Button>
                        </form>
                    </Card.Content>
                </Card>
            </div>
        </>
    )
}

export default Register