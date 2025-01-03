import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

function Home() {
    const [authUser, setAuthUser] = useState();

    useEffect(() => {
        document.title = "Home - Morent";
        const dataAuth = sessionStorage.getItem("authUser");
        setAuthUser(JSON.parse(dataAuth));
    }, []);

    return (
        <div>
            <Navbar auth={authUser} />
            <div className='h-screen flex items-center justify-center bg-gray-50'>
                <h1 className='text-4xl font-bold text-green-600'>
                    Welcome to the Home Page 🚀
                </h1>
            </div>
        </div>
    );
}

export default Home;
