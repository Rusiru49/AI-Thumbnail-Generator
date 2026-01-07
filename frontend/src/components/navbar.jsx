import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const { isLoggedIn, user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            {/* Desktop / Main Navbar */}
            <motion.nav
                className="sticky top-0 z-50 flex items-center justify-between w-full h-18 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur bg-black/30"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 250, damping: 70 }}
            >
                <Link to="/" className="font-bold text-2xl">
                    PictoAI
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link to="/" className="hover:text-indigo-500 transition">
                        Home
                    </Link>
                    <Link to="/generate" className="hover:text-indigo-500 transition">
                        Generate
                    </Link>

                    {isLoggedIn ? (
                        <Link
                            to="/mygenerations"
                            className="hover:text-indigo-500 transition"
                        >
                            My Generations
                        </Link>
                    ) : (
                        <Link to="/about" className="hover:text-indigo-500 transition">
                            About
                        </Link>
                    )}

                    <Link to="/contact" className="hover:text-indigo-500 transition">
                        Contact Us
                    </Link>
                </div>

                {/* Auth Section */}
                <div className="flex items-center gap-4">
                    {isLoggedIn ? (
                        <div className="relative group">
                            <button className="w-9 h-9 rounded-full bg-indigo-600 text-white font-semibold">
                                {user?.name?.charAt(0)?.toUpperCase() || "U"}
                            </button>

                            <div className="absolute right-0 mt-2 hidden group-hover:block bg-white text-black shadow-lg rounded-lg w-32 text-center overflow-hidden">
                                <button
                                    onClick={logout}
                                    className="block w-full px-4 py-2 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => navigate("/login")}
                            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md active:scale-95"
                        >
                            Get started
                        </button>
                    )}
                    {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="lg:hidden active:scale-90 transition"
                >
                    <MenuIcon className="size-6" />
                </button>
                </div>

            </motion.nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 lg:hidden transition-transform duration-300 ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <Link onClick={() => setIsMenuOpen(false)} to="/">
                    Home
                </Link>
                <Link onClick={() => setIsMenuOpen(false)} to="/generate">
                    Generate
                </Link>

                {isLoggedIn ? (
                    <Link
                        onClick={() => setIsMenuOpen(false)}
                        to="/mygenerations"
                    >
                        My Generations
                    </Link>
                ) : (
                    <Link onClick={() => setIsMenuOpen(false)} to="/about">
                        About
                    </Link>
                )}

                <Link onClick={() => setIsMenuOpen(false)} to="/contact">
                    Contact Us
                </Link>

                {!isLoggedIn && (
                    <Link onClick={() => setIsMenuOpen(false)} to="/login">
                        Login
                    </Link>
                )}

                {isLoggedIn && (
                    <button
                        onClick={() => {
                            setIsMenuOpen(false);
                            logout();
                        }}
                        className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                )}

                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="aspect-square size-10 p-1 bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex items-center justify-center"
                >
                    <XIcon />
                </button>
            </div>
        </>
    );
}
