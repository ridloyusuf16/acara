import { Button } from '@heroui/react';
import Image from 'next/image'
import { useRouter } from 'next/router';

const RegisterSuccess = () => {
    const router = useRouter()

    return(
        <div className='flex flex-col w-screen gap-10 p-4'>
            <div className='flex flex-col items-center justify-center gap-10'>
                <Image 
                src="/images/general/logo.svg"
                alt="logo"
                width={180}
                height={100}
                style={{ width: 'auto', height: 'auto' }}
                priority
            />
            <Image 
                src="/images/illustration/email-send.svg"
                alt="login"
                width={300}
                height={300}
                priority
            />
            </div>
            <div className='flex flex-col text-center items-center gap-2'>
                <h1 className='text-3xl font-bold text-danger'>Create Account Success</h1>
                <p className='text-xl font-bold text-default-soft-foreground'>Check your email for account activation</p>
                <Button className="mt-4 w-fit text-danger border-danger hover:bg-danger-soft" variant="outline" onClick={() => router.push("/")}>Back To Home</Button>
            </div>
        </div>
    )
}

export default RegisterSuccess;