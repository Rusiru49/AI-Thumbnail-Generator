import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-400 mt-40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                
                {/* Brand */}
                <div className="sm:col-span-2 lg:col-span-1">
                    <h1 className="text-2xl font-bold text-white mb-4">PictoAI</h1>
                    <p className="text-sm/7 mt-6">
                        An AI-powered thumbnail generator that helps creators design
                        eye-catching thumbnails in seconds — no design skills required.
                    </p>
                </div>

                {/* Company Links */}
                <div className="flex flex-col lg:items-center lg:justify-center">
                    <div className="flex flex-col text-sm space-y-2.5">
                        <h2 className="font-semibold mb-5 text-white">Company</h2>
                        <a className="hover:text-slate-500 transition" href="#about">About</a>
                        <a className="hover:text-slate-500 transition" href="#creations">Examples</a>
                        <a className="hover:text-slate-500 transition" href="#contact">Contact</a>
                        <a className="hover:text-slate-500 transition" href="#">Privacy Policy</a>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="font-semibold text-white mb-5">
                        Get Thumbnail Tips
                    </h2>
                    <div className="text-sm space-y-6 max-w-sm">
                        <p>
                            Weekly AI thumbnail tips, creator insights, and product updates.
                            No spam. Ever.
                        </p>
                        <div className="flex items-center justify-center gap-2 p-2 rounded-md bg-slate-900">
                            <input
                                className="outline-none w-full max-w-64 py-2 rounded px-2 bg-transparent"
                                type="email"
                                placeholder="Enter your email"
                            />
                            <button className="bg-indigo-600 px-4 py-2 text-white rounded hover:bg-indigo-700 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <p className="py-4 text-center border-t mt-6 border-slate-700">
                © {new Date().getFullYear()} AI Thumbnail Generator. All rights reserved.
            </p>
        </motion.footer>
    );
}
