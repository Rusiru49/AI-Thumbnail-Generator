import React, { useEffect } from "react";
import SoftBackdrop from "./SoftBackdrop";
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [state, setState] = React.useState("login");
    const {user, login, signUp} = useAuth();

    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (state === "login") {
            login(formData)
        }else {
            signUp(formData)
        }
        console.log(state, formData);
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user])

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-indigo-00 to-black-600">
            <SoftBackdrop />

            {/* Card */}
            <div className="w-full max-w-md px-8 py-10 bg-gradient-to-br from-indigo-950/60 to-black/60 backdrop-blur-xl border border-indigo-500/20 rounded-2xl shadow-lg text-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                    {state === "login" ? "Login" : "Sign up"}
                </h1>

                <p className="text-gray-400 text-sm mt-6 mb-8">
                    Generate stunning AI thumbnails effortlessly
                </p>

                {/* Name */}
                {state !== "login" && (
                    <FloatingInput
                        label="Name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />
                )}

                {/* Email */}
                <FloatingInput
                    label="Email address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                {/* Password */}
                <FloatingInput
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                {/* Forgot */}
                <div className="mt-4 text-left">
                    <button
                        type="button"
                        className="text-sm text-indigo-400 hover:text-indigo-500 transition cursor-pointer"
                    >
                        Forgot password?
                    </button>
                </div>

                {/* Submit */}
                <button
                    onClick={handleSubmit}
                    className="mt-6 w-full h-11 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition active:scale-95 cursor-pointer"
                >
                    {state === "login" ? "Login" : "Sign up"}
                </button>

                {/* Switch */}
                <p
                    onClick={() =>
                        setState(prev => prev === "login" ? "register" : "login")
                    }
                    className="text-gray-400 text-sm mt-6 mb-10 cursor-pointer"
                >
                    {state === "login"
                        ? "Don't have an account?"
                        : "Already have an account?"}
                    <span className="text-indigo-400 hover:text-indigo-500 ml-1">
                        Click here
                    </span>
                </p>
            </div>
        </div>
    );
}

/* ---------------- Floating Input Component ---------------- */
function FloatingInput({ label, name, type, value, onChange }) {
    return (
        <div className="relative mt-6 w-full h-14 rounded-full bg-indigo-80/50 border border-indigo-500/30 focus-within:border-indigo-400 focus-within:shadow-[0_0_25px_rgba(99,102,241,0.45)] transition-all">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required
                className="peer w-full h-full bg-transparent px-6 pt-4 text-white outline-none caret-indigo-400 cursor-pointer"
            />

            <label className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-sm transition-all duration-300 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-400 peer-valid:top-2 peer-valid:text-xs peer-valid:text-indigo-400">
                {label}
            </label>
        </div>
    );
}
