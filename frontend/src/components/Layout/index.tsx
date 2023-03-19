import { useSession } from "next-auth/react";
import Categories from "../Categories";
import Footer from "../Footer";
import Header from "../Header";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
    
    const { data: session } = useSession();
    const sessionObj = session && session 

    return (
        <div className="flex flex-col min-h-screen">
        <Header session={sessionObj} />
        <main>
            {children}
        </main>
        <Footer/>
        </div>
    )
}

export default MainLayout