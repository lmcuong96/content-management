
import { createHashRouter, RouterProvider} from "react-router-dom";
import {Root} from "./components/root/root.jsx";
import {AddContent} from "./pages/contents/add-content/add-content.jsx";
import {Login} from "./pages/auth/login/login.jsx";
import {UserContent} from "./pages/contents/user-content/user-content.jsx";
import {AllContents} from "./pages/contents/all-contents/all-contents.jsx";
import {cs, provideContext} from "cs-react";
import {createApis} from "./apis/create-apis.js";

const Apis =  ({next}) => next(createApis())

const App = () => cs(
    ["apis", ({auth}, next) => Apis({auth, next})],
    ({apis}, next) => provideContext("apis", apis, next),
    () => {
        const router = createHashRouter([
            {
                path: "/",
                element: <Root/>,
                children:[
                    {
                        path: "/",
                        element: <AllContents/>
                    },
                    {
                        path: "/add-content",
                        element: <AddContent/>
                    },
                    {
                        path: "/user-contents",
                        element: <UserContent/>
                    },
                    {
                        path: "/login",
                        element: <Login/>
                    },
                ]
            }
        ])
        return <RouterProvider router={router}/>;
    }
)

export default App
