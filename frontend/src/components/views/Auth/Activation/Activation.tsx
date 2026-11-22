import { Button } from '@heroui/react';
import Image from 'next/image'
import { useRouter } from 'next/router';

interface PropTypes {
    status: "success" | "failed"
}

const Activation = (props: PropTypes) => {
    const router = useRouter()
    const {status} = props;

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
                src={status === 'success' ? "/images/illustration/success.svg" : "/images/illustration/pending.svg"}
                alt="login"
                width={300}
                height={300}
                priority
            />
            </div>
            <div className='flex flex-col text-center items-center gap-2'>
                <h1 className='text-3xl font-bold text-danger'>{status === 'success' ? "Activation Success" : "Activation Failed"}</h1>
                <p className='text-xl font-bold text-default-soft-foreground'>{status === 'success' ? "Thank you for register account in Acara" : "Confirmation code is invalid"}</p>
                <Button className="mt-4 w-fit text-danger border-danger hover:bg-danger-soft" variant="outline" onClick={() => router.push("/")}>Back To Home</Button>
            </div>
        </div>
    )
}

export default Activation;