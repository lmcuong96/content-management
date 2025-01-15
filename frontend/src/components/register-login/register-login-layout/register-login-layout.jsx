import {cs} from "cs-react";
import {Header} from "../../header/header.jsx";
import {Outlet} from "react-router-dom";
import {Footer} from "../../footer/footer.jsx";

export const RegisterLoginLayout = () => cs(
    () => {
        return (
            <div className="flex flex-col min-h-screen">
                <main className="w-full flex flex-grow justify-center my-3">
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        );
    }
)