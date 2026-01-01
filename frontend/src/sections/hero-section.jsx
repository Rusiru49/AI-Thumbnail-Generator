import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TiltedImage from "../components/tilt-image";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center -mt-18">
            {/* Background SVG */}
            <motion.svg 
                className="absolute -z-10 w-full -mt-40 md:mt-0" 
                width="1440" 
                height="676" 
                viewBox="0 0 1440 676" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5}}
            >
                <rect x="-92" y="-948" width="1624" height="1624" rx="812" fill="url(#a)" />
                <defs>
                    <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 428 292)scale(812)">
                        <stop offset=".63" stopColor="#372AAC" stopOpacity="0" />
                        <stop offset="1" stopColor="#372AAC" />
                    </radialGradient>
                </defs>
            </motion.svg>

            {/* Top Badge */}
            <motion.a 
                className="flex items-center mt-48 gap-2 border border-slate-600 text-gray-50 rounded-full px-4 py-2"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                <span>Generate stunning AI thumbnails instantly</span>
            </motion.a>

            {/* Hero Heading */}
            <motion.h1 
                className="text-center text-5xl leading-[68px] md:text-6xl md:leading-[70px] mt-4 font-semibold max-w-2xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                Create Eye-Catching Thumbnails with AI
            </motion.h1>

            {/* Hero Subtext */}
            <motion.p 
                className="text-center text-base max-w-lg mt-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                Upload your ideas, choose a style, and let our AI generate thumbnails that grab attention — fast and effortlessly.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
                className="flex items-center gap-4 mt-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition text-white active:scale-95 rounded-lg px-7 h-11">
                    Generate Thumbnail
                    <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-slate-400 active:scale-95 hover:bg-white/10 transition rounded-lg px-8 h-11">
                    Book a Demo
                </button>
            </motion.div>

            {/* Tilted Image/Thumbnail Preview */}
            <TiltedImage />
        </section>
    );
}
