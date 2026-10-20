import type { ReactNode } from "react";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-[#101112] text-[#F3EFE7]">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer/>.
        </div>
    );
}
