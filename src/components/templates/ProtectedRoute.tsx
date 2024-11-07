'use client'
import { useEffect } from 'react';
import { isAuthenticated } from '@/utils/helper';
import { usePathname, useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login');
        }
    }, [router]);

    return isAuthenticated() ? <>{children}</> : null;
}
