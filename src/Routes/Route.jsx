import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);
export default router;