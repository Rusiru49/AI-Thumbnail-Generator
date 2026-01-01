import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function OurTestimonials() {
    const testimonials = [
        {
            quote: "My YouTube CTR improved noticeably after switching to AI-generated thumbnails. Super fast and insanely effective.",
            name: "Richard Nelson",
            role: "YouTube Creator",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
        },
        {
            quote: "I’m not a designer, but this tool makes my thumbnails look professionally designed in minutes.",
            name: "Sophia Martinez",
            role: "Content Marketer",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
        },
        {
            quote: "The AI understands exactly what grabs attention. This has become a must-have tool in my workflow.",
            name: "Ethan Roberts",
            role: "Digital Marketer",
            image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
        },
        {
            quote: "Clean thumbnails, great color balance, and strong visual hierarchy. Perfect for social media campaigns.",
            name: "Isabella Kim",
            role: "Brand Strategist",
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
        },
        {
            quote: "I used to spend hours in Photoshop. Now I generate thumbnails in seconds. Huge time saver.",
            name: "Liam Johnson",
            role: "Startup Founder",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
        },
        {
            quote: "This tool completely changed how I approach content visuals. Simple, powerful, and effective.",
            name: "Ava Patel",
            role: "Social Media Manager",
            image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
        },
    ];

    return (
        <section className="flex flex-col items-center" id="testimonials">
            <SectionTitle
                title="Loved by Creators Worldwide"
                description="See what creators, marketers, and founders say about generating thumbnails with our AI."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-18 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={testimonial.name}
                        className="group border border-slate-800 p-6 rounded-xl bg-black/20"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <p className="text-slate-100 text-base leading-relaxed">
                            “{testimonial.quote}”
                        </p>

                        <div className="flex items-center gap-3 mt-8 group-hover:-translate-y-1 transition duration-300">
                            <img
                                className="w-10 h-10 rounded-full object-cover"
                                src={testimonial.image}
                                alt={testimonial.name}
                            />
                            <div>
                                <h2 className="text-gray-200 font-medium">
                                    {testimonial.name}
                                </h2>
                                <p className="text-indigo-500 text-sm">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
