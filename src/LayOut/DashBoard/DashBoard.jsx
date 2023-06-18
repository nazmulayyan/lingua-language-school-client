import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-cyan-500 text-base-content">
                    {/* Sidebar content here */}
                    <li className="hover:bg-white rounded-lg uppercase text-lg"><Link>admin</Link></li>
                    <li className="hover:bg-white rounded-lg uppercase text-lg"><Link to='student'>student</Link></li>
                    <li className="hover:bg-white rounded-lg uppercase text-lg"><Link to='InstructorDashBoard'>instructor</Link></li>
                    <li className="hover:bg-white rounded-lg uppercase text-lg"><Link to='payment'>payment</Link></li>
                    <div className="border-b-4 border-white pt-5 w-full"></div>
                    <li className="hover:bg-white rounded-lg uppercase text-lg mt-3"><Link to='/'>home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;