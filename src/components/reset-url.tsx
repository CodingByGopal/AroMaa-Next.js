"use client"
import { Button } from './ui/button'
import { usePathname, useRouter } from 'next/navigation'

const ResetUrl = () => {
    const pathname = usePathname();
    const router = useRouter();
    const onReset = () => {
        router.replace(pathname);
    }
    return (
        <Button onClick={onReset} variant='link'>Reset</Button>
    )
}

export default ResetUrl