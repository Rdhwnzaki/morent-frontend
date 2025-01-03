import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { IoSettings } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaSearch, FaSlidersH } from "react-icons/fa";

function Navbar({ auth }) {
    console.log(auth);

    return (
        <div className='h-24 content-center'>
            <div className='flex items-center'>
                <div className={auth?.role === "admin" ? "hidden" : 'flex-none w-64 text-center font-medium text-[#3563e9] text-3xl'}>
                    MORENT
                </div>
                <div className={auth?.role === "admin" ? 'flex-1 w-96 ms-10' : 'flex-1 w-96'}>
                    <div className='flex items-center gap-2 w-full max-w-lg p-3 bg-white rounded-full shadow-sm border border-gray-300'>
                        <FaSearch className='text-gray-500 text-lg' />
                        <input
                            type='text'
                            placeholder='Search something here'
                            className='flex-1 bg-transparent focus:outline-none text-gray-700'
                        />
                        <FaSlidersH className='text-gray-500 text-lg cursor-pointer' />
                    </div>
                </div>
                <div className='flex-1 w-64 flex flex-row justify-end items-center mx-5 gap-5'>
                    <div className='rounded-full '>
                        <IoMdNotifications className='text-2xl' />
                    </div>
                    <div className='rounded-full '>
                        <IoSettings className='text-2xl' />
                    </div>
                    <div>
                        <Avatar>
                            <AvatarImage
                                src='/logo.png'
                                alt='@shadcn'
                                className='w-14   rounded-full'
                            />
                            <AvatarFallback>Profile</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
