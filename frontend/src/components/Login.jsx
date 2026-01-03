import React from "react";
import SoftBackdrop from "./SoftBackdrop";

export default function Login() {
    const [state, setState] = React.useState("login");

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
        console.log(state, formData);
    };

    return (
        <div
            className="
                min-h-screen w-full flex items-center justify-center relative
                bg-gradient-to-br from-[#0f1020] via-[#0b0b18] to-[#07070f]
                px-4 overflow-hidden
            "
        >
            <SoftBackdrop />

            {/* Card */}
            <form
                onSubmit={handleSubmit}
                className="
                    w-full max-w-md px-8
                    bg-white/8 backdrop-blur-xl
                    border border-white/15
                    rounded-2xl
                    shadow-[0_0_60px_rgba(55,42,172,0.25)]
                    text-center
                "
            >
                <h1 className="text-gray-50 text-3xl mt-10 font-semibold">
                    {state === "login" ? "Login" : "Sign up"}
                </h1>

                <p className="text-gray-400 text-sm mt-2">
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
                        className="text-sm text-indigo-400 hover:text-indigo-300 transition cursor-pointer"
                    >
                        Forgot password?
                    </button>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="
                        mt-6 w-full h-11 rounded-full
                        bg-indigo-600 hover:bg-indigo-700
                        text-white font-medium
                        transition active:scale-95
                        cursor-pointer
                    "
                >
                    {state === "login" ? "Login" : "Sign up"}
                </button>

                {/* Switch */}
                <p
                    onClick={() =>
                        setState(prev => prev === "login" ? "register" : "login")
                    }
                    className="text-gray-400 text-sm mt-4 mb-10 cursor-pointer"
                >
                    {state === "login"
                        ? "Don't have an account?"
                        : "Already have an account?"}
                    <span className="text-indigo-400 hover:text-indigo-300 ml-1">
                        Click here
                    </span>
                </p>
            </form>
        </div>
    );
}

/* ---------------- Floating Input Component ---------------- */

function FloatingInput({ label, name, type, value, onChange }) {
    return (
        <div
            className="
                relative mt-4 w-full h-12 rounded-full
                bg-white/6 border border-white/15
                focus-within:border-indigo-500/70
                focus-within:shadow-[0_0_25px_rgba(99,102,241,0.45)]
                transition-all
            "
        >
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required
                className="
                    peer w-full h-full bg-transparent
                    px-6 pt-4 text-white
                    outline-none
                    caret-indigo-400
                    cursor-pointer
                "
            />

            <label
                className="
                    absolute left-6 top-1/2 -translate-y-1/2
                    text-white/60 text-sm
                    transition-all duration-300
                    pointer-events-none
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-indigo-400
                    peer-valid:top-2 peer-valid:text-xs peer-valid:text-indigo-400
                "
            >
                {label}
            </label>
        </div>
    );
}
