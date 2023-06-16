import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import loginImg from '../../assets/login/login.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const auth = getAuth();

const Register = () => {
    useTitle('Register');

    const { registerUser, setUser, user } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (!name || !email || !photoUrl || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (!/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9a-z]).{6,}$/.test(password)) {
            setError('Invalid password! Password must be 6 characters long and contain at least one capital letter, one special character, and one lowercase letter.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        registerUser(email, password)
            .then((result) => {
                setUser({ ...user, displayName: name, photoURL: photoUrl });
                console.log(result.user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoUrl
                });
                form.reset();
                setError(''); // Remove the error message after successful submission
                // Display a success toast message
                toast.success('Registration successful!');
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10 w-11/12 mx-auto mb-36 ">

            <div className="flex justify-center">

                <div className="relative h-96 shadow-xl hover:shadow-none duration-200 rounded-xl">
                    <img className="h-96 rounded-xl" src={loginImg} alt="" />
                    <div className="flex justify-center rounded-xl items-center absolute glassEffect2 top-0 w-full h-full capitalize">
                        <div>
                            <h3 className="md:text-4xl text-3xl font-bold text-gray-800">excited to see you there</h3>
                            <div className="flex mt-5 justify-center">
                                <Link to='/login' className="py-3 px-4 bg-white text-gray-700 font-semibold text-xl capitalize rounded-lg ">go back</Link>
                                <p className="py-3 px-4 bg-white font-semibold text-xl capitalize rounded-lg text-cyan-500 ml-5">register</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleRegistration}>
                {/* Add the ToastContainer component */}
                <ToastContainer />
                <div className="bg-cyan-500 p-8 h-fit rounded-xl shadow-xl hover:shadow-none duration-300">
                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <input className="w-full rounded-lg py-3 px-6" type="text" name="name" placeholder="Please enter your name" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        <input className="w-full rounded-lg py-3 px-6" type="text" name="photoUrl" placeholder="Please enter your photo URL" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input className="w-full rounded-lg py-3 px-6" type="email" name="email" placeholder="Please enter your email" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <input className="w-full rounded-lg py-3 px-6" type="password" name="password" placeholder="Please enter your password" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Confirm Password</span>
                        </label>
                        <input className="w-full rounded-lg py-3 px-6" type="password" name="confirmPassword" placeholder="Please confirm your password" />
                    </div>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    <input className="w-full rounded-lg bg-white mt-5 py-3 text-xl font-bold uppercase mb-3 cursor-pointer" type="submit" value="Register" />
                    <div>
                        <Link to='/login' className="text-lg capitalize font-semibold">Already have an account? <span className="hover:text-white duration-300">Please login</span></Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
