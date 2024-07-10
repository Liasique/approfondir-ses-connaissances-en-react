import { Outlet } from "react-router-dom";
import MainNav from "../../components/navigation/MainNav";
import "./Root.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <>
            <Header/>
            <MainNav />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Root;


