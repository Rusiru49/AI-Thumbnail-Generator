import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import TiltedImage from "../components/tilt-image";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="relative flex flex-col items-center -mt-18 overflow-hidden">
            {/* Enhanced Background with Multiple Gradients */}
            <div className="absolute inset-0 -z-10">
                {/* Main radial gradient */}
                <motion.svg 
                    className="absolute w-full -mt-40 md:mt-0" 
                    width="1440" 
                    height="676" 
                    viewBox="0 0 1440 676" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <rect x="-92" y="-948" width="1624" height="1624" rx="812" fill="url(#a)" />
                    <defs>
                        <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 428 292)scale(812)">
                            <stop offset=".63" stopColor="#372AAC" stopOpacity="0" />
                            <stop offset="1" stopColor="#372AAC" />
                        </radialGradient>
                    </defs>
                </motion.svg>

                {/* Animated gradient orbs */}
                <motion.div 
                    className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                    className="absolute top-40 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
            </div>

            {/* Top Badge - Enhanced with gradient border effect */}
            <motion.div
                className="relative mt-48 group"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
                <a className="relative flex items-center gap-2 border border-slate-600/50 bg-slate-900/50 backdrop-blur-sm text-gray-50 rounded-full px-5 py-2.5 hover:border-indigo-500/50 transition-all">
                    <div className="relative">
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                        <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping" />
                    </div>
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm font-medium">Generate stunning AI thumbnails instantly</span>
                </a>
            </motion.div>

            {/* Hero Heading - Enhanced with gradient text */}
            <motion.h1 
                className="text-center text-5xl leading-tight md:text-7xl md:leading-tight mt-6 font-bold max-w-4xl bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent px-4"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                Create Eye-Catching{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Thumbnails
                </span>
                {" "}with AI
            </motion.h1>

            {/* Hero Subtext - Enhanced spacing and styling */}
            <motion.p 
                className="text-center text-lg md:text-xl text-gray-300/90 max-w-2xl mt-6 px-4 leading-relaxed"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                Upload your ideas, choose a style, and let our AI generate thumbnails that grab attention — fast and effortlessly.
            </motion.p>

            {/* CTA Buttons - Enhanced with better hover effects */}
            <motion.div 
                className="flex flex-col sm:flex-row items-center gap-4 mt-10"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <motion.button 
                    onClick={() => navigate('/generate')}
                    className="relative flex items-center gap-2 bg-indigo-600 text-white rounded-lg px-8 h-12 font-medium overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center gap-2">
                        Generate Thumbnail
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                </motion.button>
                
                <motion.button 
                    className="relative border border-slate-500/50 backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-slate-400 transition-all rounded-lg px-8 h-12 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Book a Demo
                </motion.button>
            </motion.div>

            {/* Social Proof - Optional addition */}
            <motion.div
                className="flex items-center gap-6 mt-12 text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-slate-900" />
                        ))}
                    </div>
                    <span>10,000+ users</span>
                </div>
                <div className="w-px h-4 bg-slate-700" />
                <div>⭐ 4.9/5 rating</div>
            </motion.div>

            {/* Tilted Image/Thumbnail Preview */}
            <TiltedImage />
        </section>
    );
}