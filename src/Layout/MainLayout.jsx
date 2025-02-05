import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


const MainLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default MainLayout;