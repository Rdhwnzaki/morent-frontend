import { cn } from "@/lib/utils";
import { Home, Car, LogOut } from "lucide-react";

export function Sidebar() {
    const items = [
        { name: "Dashboard", icon: Home, href: "/dashboard" },
        { name: "Car", icon: Car, href: "/cars" },
        { name: "Logout", icon: LogOut, href: "/logout" },
    ];

    return (
        <div className="w-64 bg-white border-r shadow-md">
            <div className='flex-none w-64 text-center font-medium text-[#3563e9] text-3xl mt-8'>
                MORENT
            </div>
            <ul className="space-y-2 p-4 mt-5">
                <p className="px-3 text-slate-400 text-sm">MAIN MENU</p>
                {items.map((item) => (
                    <li key={item.name}>
                        <a
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-[#3563e9] hover:text-white"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
