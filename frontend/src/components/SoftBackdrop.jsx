export default function SoftBackdrop() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">

            {/* Main Hero Glow */}
            <div
                className="
                    absolute left-1/2 top-24 -translate-x-1/2
                    w-[900px] h-[420px]
                    bg-[#372AAC]/45
                    rounded-full blur-[180px]
                "
            />

            {/* Right Accent Glow */}
            <div
                className="
                    absolute right-20 bottom-24
                    w-[420px] h-[260px]
                    bg-indigo-600/40
                    rounded-full blur-[140px]
                "
            />

            {/* Ambient Fill */}
            <div
                className="
                    absolute left-24 bottom-40
                    w-[320px] h-[200px]
                    bg-indigo-500/25
                    rounded-full blur-[120px]
                "
            />
        </div>
    );
}
