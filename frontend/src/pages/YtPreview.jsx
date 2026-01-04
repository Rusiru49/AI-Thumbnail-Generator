import { useLocation } from "react-router-dom";
import SoftBackdrop from "../components/SoftBackdrop";

export default function YtPreview() {
  const location = useLocation();

  // Thumbnail passed from Generate / MyGenerations
  const thumbnail = location.state?.thumbnail || null;
  const title =
    location.state?.title ||
    "How to Build a Modern React App in 2025";

  const channelName = "Your Channel Name";
  const views = "125K views";
  const time = "2 days ago";

  return (
    <div className="relative">
      <SoftBackdrop />

      <div className="pt-28 min-h-screen text-gray-100">
        <main className="max-w-5xl mx-auto px-4">
          {/* Page Title */}
          <h1 className="text-4xl font-bold mb-10 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
            YouTube Preview
          </h1>

          {/* Preview Card */}
          <div
            className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl
            border border-indigo-500/20
            bg-gradient-to-br from-indigo-950/60 to-black/60
            backdrop-blur-xl shadow-xl"
          >
            {/* Thumbnail */}
            <div className="w-full md:w-[420px] aspect-video rounded-xl overflow-hidden border border-indigo-500/30 bg-black/40">
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt="YouTube Thumbnail"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                  No thumbnail selected
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                {title}
              </h2>

              <div className="text-sm text-gray-400 mb-4">
                {views} • {time}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600/40 flex items-center justify-center font-bold">
                  Y
                </div>
                <div>
                  <p className="font-medium">{channelName}</p>
                  <p className="text-xs text-gray-400">
                    54K subscribers
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                This is a simulated YouTube preview. It helps you
                visualize how your thumbnail and title will appear
                to viewers on YouTube.
              </p>
            </div>
          </div>

          {/* Tip */}
          <div className="mt-6 text-sm text-gray-400">
            💡 Tip: High-contrast faces and bold text usually perform
            better on YouTube thumbnails.
          </div>
        </main>
      </div>
    </div>
  );
}
