import { Link } from "react-router-dom";
import ActiveLink from "../../LayOut/ActiveLink/ActiveLink";
import { RxHamburgerMenu, RxCross2, } from "react-icons/rx";
import { RiShoppingCartLine } from "react-icons/ri";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import addItems from "../../Hooks/addItems";

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const [addClass] = addItems();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };

    const handleToggleTooltip = () => {
        setShowTooltip(!showTooltip);
    };
    return (
        <nav className="bg-cyan-500 h-20 relative z-10">
            <div className="flex justify-between w-11/12 mx-auto items-center h-full">
                {/* logo */}
                <div>
                    <Link to="/" className="md:text-3xl text-2xl font-semibold text-gray-800 cursor-pointer">
                        LINGUA
                    </Link>
                </div>

                <div className="flex gap-2 items-center">
                    <div className="justify-end">
                        <ul
                            className={`list-none lg:flex items-center lg:static duration-500 lg-p-0 p-5 text-center -z-10 lg:space-y-0 space-y-3  absolute lg:bg-none bg-cyan-500 ${open ? "right-10 top-24" : "right-10  -top-72 "
                                }`}
                        >
                            <li className="px-6 cursor-pointer font-semibold text-lg  text-white">
                                <ActiveLink to="/">
                                    Home
                                </ActiveLink>
                            </li>
                            <li className="px-6 cursor-pointer font-semibold text-lg text-white">
                                <ActiveLink className="" to="/instructor">
                                    Instructor
                                </ActiveLink>
                            </li>
                            <li className="px-6 cursor-pointer font-semibold text-lg text-white">
                                <ActiveLink className="" to="/classes">
                                    Classes
                                </ActiveLink>
                            </li>
                            {user?.email || user?.providerData ? (
                                <>

                                    <li className="px-6 cursor-pointer font-semibold text-lg text-white">
                                        
                                        <ActiveLink className="" to="/dashboard">
                                            dashboard
                                        </ActiveLink>
                                        <div className="fixed top-1/2 left-0 rounded-r-sm bg-cyan-500 px-3 py-2 text-3xl font-bold text-black">
                                            <span className="text-base">+{addClass?.length || 0}</span>
                                            <RiShoppingCartLine />
                                        </div>
                                    </li>
                                </>
                            ) : (
                                <>

                                </>
                            )}

                            {user?.email || user?.providerData ? (
                                <li>
                                    <button onClick={handleLogOut} className="font-semibold text-lg hover:text-gray-800 transition-all duration-150 text-white">
                                        Logout
                                    </button>
                                </li>
                            ) : (
                                <li className="px-6 cursor-pointer font-semibold text-lg text-white">
                                    <ActiveLink to="/login">
                                        Login
                                    </ActiveLink>
                                </li>
                            )}
                        </ul>
                    </div>
                    {/* user photo */}
                    <div>
                        {user?.photoURL && (
                            <div
                                className="relative hover:bg-gray-800 transition-all duration-150 bg-white p-1 rounded-full w-12 h-12 cursor-pointer"
                                onMouseEnter={handleToggleTooltip}
                                onMouseLeave={handleToggleTooltip}
                            >
                                {showTooltip && (
                                    <span className="absolute -bottom-14 -left-4 bg-gray-800 text-white px-2 py-1 rounded shadow w-fit">
                                        {user.displayName}
                                    </span>
                                )}
                                <img className="rounded-full " src={user.photoURL} alt="User Photo" />
                            </div>
                        )}
                    </div>
                    {/* hamburger menu */}
                    <div
                        onClick={() => setOpen(!open)}
                        className="w-12 h-12 lg:hidden bg-white rounded-full text-cyan-500 flex justify-center items-center font-semibold text-2lg cursor-pointer"
                    >
                        <span>{open === true ? <RxCross2 /> : <RxHamburgerMenu />}</span>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;