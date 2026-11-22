interface IRegister {
    fullName: string,
    email: string,
    username: string,
    password: string,
    confirmPassword: string
}

interface IActivation {
    code: string
}

export type { IRegister, IActivation };