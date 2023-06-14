import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from '../../Hooks/useTitle'
import { FcGoogle } from "react-icons/fc";
import loginImg from '../../assets/login/login.jpg'

const Login = () => {
    useTitle('Login')

    const { loginUser, handleGoogleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const from = location.state?.from || '/';

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                setError('');
                navigate(from, { replace: true }); // Redirect to private route
                form.reset();
            })
            .catch((error) => {
                console.log(error.message);
                setError('Login failed. Please check your credentials.');
                throw error;
            });
    };

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10 w-11/12 mx-auto mb-36 ">

            <div className="flex justify-center">
                <div className="relative h-96 shadow-xl hover:shadow-none duration-200 rounded-xl">
                    <img className="h-96 rounded-xl" src={loginImg} alt="" />
                    <div className="flex justify-center rounded-xl items-center absolute bg-gradient-to-r from-[#06b6d4] to-[rgba(0, 0, 0, 0.82)] top-0 w-full h-full capitalize">
                        <div>
                            <h3 className="md:text-4xl text-3xl font-bold text-white">excited to see you there</h3>
                            <div className="flex mt-5 justify-center">
                                <Link to='/' className="py-3 px-4 bg-white text-gray-700 font-semibold text-xl capitalize rounded-lg ">go back</Link>
                                <p className="py-3 px-4 bg-white font-semibold text-xl capitalize rounded-lg text-cyan-500 ml-5">login</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-cyan-500 p-8 h-fit rounded-xl shadow-xl hover:shadow-none duration-300">
                <form onSubmit={handleLogin}>
                    <div >
                        {error && <p className="text-cyan-500 py-2 px-6 rounded-lg bg-white">{error}</p>}

                        <div >
                            <label className="label">
                                <span className="label-text text-xl text-gray-700 font-semibold">Email</span>
                            </label>
                            <input className="w-full py-3 px-6 rounded-lg" type="email" name="email" placeholder="please enter your email" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl text-gray-700 font-semibold">Password</span>
                            </label>
                            <input className="w-full py-3 px-6 rounded-lg " type="password" name="password" placeholder="please enter your password" />
                        </div>
                        <input className="w-full rounded-lg bg-white mt-5 py-3 text-xl font-bold uppercase mb-3 cursor-pointer text-gray-700" type="submit" value="login" />
                        <div>
                            <Link to='/register' className="text-lg capitalize font-semibold text-gray-700">New to funtopia? <span className="hover:text-white duration-300 ">please register</span></Link>

                        </div>
                    </div>
                </form>
                <div>
                    <p className="text-lg capitalize font-semibold items-center text-gray-700 flex ">OR sing in with  <button onClick={handleGoogleSignIn}><FcGoogle className="text-3xl bg-white p-1 rounded-lg ml-2 " /></button></p>
                </div>
            </div>


        </div>
    );
};

export default Login;