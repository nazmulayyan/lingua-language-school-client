import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructor/Instructor";
import DashBoard from "../LayOut/DashBoard/DashBoard";
import Student from "../Pages/Dashboard/Student/Student";
import InstructorDashBoard from "../Pages/Dashboard/Instructor/InstructorDashBoard";
import Payment from "../Pages/Dashboard/Payment/Payment";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            },
            {
                path: '/instructor',
                element: <Instructor></Instructor>
            },
            
        ]
    },
    {
        path:'/dashboard',
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'student',
                element:<Student></Student>
            },
            {
                path: 'InstructorDashBoard',
                element: <InstructorDashBoard></InstructorDashBoard>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },

        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);
export default router;