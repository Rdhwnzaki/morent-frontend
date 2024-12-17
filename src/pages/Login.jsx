import { useEffect } from "react";
import SideImage from "../assets/side-image.jpg";

function Login() {
    useEffect(() => {
        document.title = "Login - Morent";
    }, []);

    return (
        <div className="flex h-screen">
            <div className="grid grid-cols-1 md:grid-cols-12 w-full h-screen">
                <div className="col-span-4 flex items-center justify-center p-6 bg-gray-50">
                    <div className="p-8 rounded-lg shadow-xl bg-white max-w-md w-full">
                        <h1 className="text-5xl font-extrabold text-center text-[#3563e9] mb-2 tracking-wide">
                            MORENT
                        </h1>
                        <p className="text-gray-500 text-center mb-6">
                            Login into your account to continue
                        </p>

                        <form>
                            <div className="mb-5">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your username"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3563e9] focus:outline-none"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3563e9] focus:outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#3563e9] text-white py-2 rounded-md font-semibold hover:bg-[#2749b3] transition-all duration-300"
                            >
                                Login
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-500 text-sm mb-2">
                                Don’t have an account?
                            </p>
                            <button
                                type="button"
                                className="w-full bg-gray-200 text-[#3563e9] py-2 rounded-md font-semibold hover:bg-gray-300 transition-all duration-300"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="hidden md:block col-span-8 h-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${SideImage})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3563e9] via-[#3563e9]/40 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white">
                        <h2 className="text-4xl font-bold mb-2">
                            Welcome to Morent
                        </h2>
                        <p className="text-lg">
                            The best car rental service for your convenience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
