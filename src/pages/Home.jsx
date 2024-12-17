import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = "Home - Morent";
    }, [])
    return (
        <div className="h-screen flex items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold text-green-600">
                Welcome to the Home Page 🚀
            </h1>
        </div>
    );
}

export default Home;
