// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-zinc-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg">
                    <Link to="/">Auth Routing</Link>
                </div>

                <div className="flex space-x-4">
                    <Link
                        to="/"
                        className="text-white  hover:text-orange-500 px-3 py-2 rounded"
                    >
                        Home
                    </Link>

                    <Link
                        to="/products"
                        className="text-white  hover:text-orange-500 px-3 py-2 rounded"
                    >
                        Products
                    </Link>

                    <Link
                        to="/about"
                        className="text-white hover:text-orange-500 px-3 py-2 rounded"
                    >
                        About
                    </Link>

                    <Link
                        to="/dashboard"
                        className="text-white hover:text-orange-500 px-3 py-2 rounded"
                    >
                        dashboard
                    </Link>

                    <Link
                        to="/login"
                        className="text-white hover:text-orange-500 px-3 py-2 rounded"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
