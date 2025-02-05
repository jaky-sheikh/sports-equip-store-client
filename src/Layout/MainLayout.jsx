import { Outlet } from "react-router-dom";
import Header from "../components/Header";


const MainLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <nav>

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