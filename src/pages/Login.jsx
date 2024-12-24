import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure } from "../redux/auth/authSlice";
import { loginApi } from "../redux/auth/authApi";
import SideImage from "../assets/side-image.jpg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Checkbox } from "@/components/ui/checkbox";

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
});

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const toggleCheck = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (values) => {
        try {
            const { username, password } = values;
            const data = await loginApi(username, password);
            dispatch(loginSuccess(data));
            sessionStorage.setItem("authUser", JSON.stringify(data.data));
            sessionStorage.setItem("token", data.token);
            if (data.data.role === "admin") {
                navigate("/dashboard");
            } else {
                navigate("/home");
            }
        } catch (error) {
            dispatch(loginFailure(error));
            toast.error(error.message);
        }
    };

    useEffect(() => {
        document.title = "Login - Morent";
    }, []);

    return (
        <div className='flex h-screen bg-gray-100'>
            <div className='grid grid-cols-1 md:grid-cols-12 w-full h-screen'>
                <div className='col-span-4 flex items-center justify-center p-6 md:p-10 bg-gradient-to-tl from-[#3563e9] to-[#6a9cfd]'>
                    <div className='p-8 rounded-xl shadow-lg bg-white w-full max-w-md mx-auto'>
                        <div className='flex justify-center'>
                            <img src='/logo.png' alt='Logo' className='max-w-32' />
                        </div>

                        <p className='text-2xl font-extrabold text-center text-[#3563e9]'>
                            MORENT
                        </p>

                        <p className='text-lg text-center text-gray-500 mb-6'>
                            Please log in to your account
                        </p>

                        <Formik
                            initialValues={{ username: "", password: "" }}
                            validationSchema={validationSchema}
                            onSubmit={handleLogin}>
                            <Form>
                                <div className='mb-6'>
                                    <Field
                                        type='text'
                                        name='username'
                                        placeholder='Username'
                                        className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3563e9]'
                                    />
                                    <ErrorMessage
                                        name='username'
                                        component='div'
                                        className='text-red-500 text-sm'
                                    />
                                </div>

                                <div className='mb-6'>
                                    <Field
                                        type={showPassword ? "text" : "password"}
                                        name='password'
                                        placeholder='Password'
                                        className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3563e9]'
                                    />
                                    <ErrorMessage
                                        name='password'
                                        component='div'
                                        className='text-red-500 text-sm'
                                    />
                                </div>

                                <div className='flex items-center space-x-2 mb-6'>
                                    <Checkbox
                                        id='show-password'
                                        onCheckedChange={toggleCheck}
                                        className='peer data-[state=unchecked]:border-[#3563e9] data-[state=checked]:bg-[#3563e9] data-[state=checked]:border-[#3563e9]'
                                    />
                                    <label
                                        htmlFor='show-password'
                                        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-500'>
                                        Show password
                                    </label>
                                </div>

                                <button
                                    type='submit'
                                    className='w-full bg-[#3563e9] text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300'>
                                    Login
                                </button>
                            </Form>
                        </Formik>

                        <div className='text-center mt-6'>
                            <p className='text-sm text-gray-500'>
                                {"Don't have an account? "}
                                <button
                                    onClick={() => navigate("/register")}
                                    className='text-[#3563e9] font-semibold hover:underline'>
                                    Register here
                                </button>
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className='hidden md:block col-span-8 h-full bg-cover bg-center rounded-lg'
                    style={{ backgroundImage: `url(${SideImage})` }}></div>
            </div>
        </div>
    );
};

export default Login;
