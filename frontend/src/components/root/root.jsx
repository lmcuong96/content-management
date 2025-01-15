import {cs} from "cs-react";
import {Outlet} from "react-router-dom";
import {Header} from "../header/header.jsx";
import {Footer} from "../footer/footer.jsx";
export const Root = () => cs(
    () => (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="w-full flex flex-grow justify-center my-3">
                <Outlet/>
            </main>
            <Footer/>
        </div>

    )
)
