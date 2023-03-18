import Categories from "../Categories";
import Footer from "../Footer";
import Header from "../Header";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout:React.FC<MainLayoutProps> = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen">
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </div>
    )
}

export default MainLayout