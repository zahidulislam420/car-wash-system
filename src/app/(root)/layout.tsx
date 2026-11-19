import Header from '@/components/ui/shared/Header';
import Navbar from '@/components/ui/shared/Navbar';
import { Toaster } from '@/components/ui/toast';
import type { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Navbar />
            <Toaster />
            {children}
            
        </div>
    );
};

export default RootLayout;
