import React from "react";
import { BiSearch } from "react-icons/bi";
import {IoCartSharp} from 'react-icons/io5'
import { Link } from "react-router-dom";

function NavSm() {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div className="w-6 h-6">
                    <BiSearch/>
                </div>
            </div>
        </>
    );
}

function NavMd() {
    return (
        <>
            <div className="w-full flex items-center gap-3 bg-white  px-3 py-1 rounded-md">
                <BiSearch />
                <input
                    type="search"
                    className="w-full bg-transparent border-none focus:outline-none"
                    placeholder="Search Courses"
                />
            </div>
        </>
    );
}

function NavLg() {
    return (
        <>
            <div className="container flex mx-auto px-4 items-center justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    <h1 className="text-white font-bold text-2xl"> <span className="text-orange-400">E</span>du<span className="text-orange-400">C</span>hain</h1>
                    <div className="w-full flex items-center gap-3 bg-white  px-3 py-1 rounded-md">
                        <BiSearch />
                        <input
                            type="search"
                            className="w-full bg-transparent border-none focus:outline-none"
                            placeholder="Search Courses"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Link className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
                        Home
                    </Link>
                    <Link className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
                        About
                    </Link>
                    <Link className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
                        Courses
                    </Link>
                    <Link className="bg-orange-400 text-white px-2 py-1 text-sm rounded">
                        Sign In
                    </Link>
                    <Link className="w-8 h-8 text-white">
                        <IoCartSharp className="w-full h-full" />
                    </Link>
                </div>
            </div>
        </>
    );
}

const Navbar = () => {
    return (
        <>
            <nav className="bg-darkBackground-700 px-4 py-3">
                <div className="md:hidden">
                    {/* Mobile Screen */}
                    <NavSm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    {/* Medium/Tab Screen */}
                    <NavMd />
                </div>
                <div className="hidden w-full lg:flex">
                    {/* Large Screen*/}
                    <NavLg />
                </div>
            </nav>
        </>
    );
};

export default Navbar;
