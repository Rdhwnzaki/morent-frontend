import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

function Dashboard() {
    const [authUser, setAuthUser] = useState();

    useEffect(() => {
        document.title = "Dashboard - Morent";
        const dataAuth = sessionStorage.getItem("authUser");
        setAuthUser(JSON.parse(dataAuth));
    }, []);

    return (
        <div>
            <Navbar auth={authUser} />
            <div className='h-screen flex items-center justify-center bg-gray-50'>
                <h1 className='text-4xl font-bold text-green-600'>
                    Welcome to the Dashboard Page 🚀
                </h1>
            </div>
        </div>
    );
}

export default Dashboard;
