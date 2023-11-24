import { Link, useLocation } from "react-router-dom"

const MenuNavbar = () => {

    const location = useLocation();

    const { pathname } = location;

    return (
        <div className="bg-cust-primary800 py-2">
            <div className="cust-container grid grid-cols-12 gap-5 text-white">
                <div className="col-span-10 flex text-sm justify-center items-center">
                    <Link 
                    to={"/dashboard"}
                    className={`px-4 sm:px-8 md:px-12 lg:px-16 text-xs md:text-base hover:underline transition-all duration-150 py-2 border-e-2 border-white
                        ${pathname === "/komunitas" && "underline"}
                    `}>
                       KOMUNITAS 
                    </Link>
                    <Link 
                    to={"/dashboard"}
                    className={`px-4 sm:px-8 md:px-12 lg:px-16 text-xs md:text-base hover:underline transition-all duration-150 py-2 border-e-2 border-white
                        ${pathname === "/acara" && "underline"}
                    `}>
                       ACARA 
                    </Link>
                    <Link 
                    to={"/dashboard"}
                    className={`px-4 sm:px-8 md:px-12 lg:px-16 text-xs md:text-base hover:underline transition-all duration-150 py-2 border-e-2 border-white
                        ${pathname === "/pemasaran" && "underline"}
                    `}>
                       PEMASARAN 
                    </Link>
                    <Link 
                    to={"/dashboard"}
                    className={`px-4 sm:px-8 md:px-12 lg:px-16 text-xs md:text-base hover:underline transition-all duration-150 py-2 border-e-2 border-white
                        ${pathname === "/tips" && "underline"}
                    `}>
                       TIPS 
                    </Link>
                </div>
                <div className="col-span-2 flex justify-end">
                    <div className="h-12 rounded-full">
                        <img src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700668435/Rectangle_152_ocl4ks.png" className="h-full aspect-square" alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuNavbar