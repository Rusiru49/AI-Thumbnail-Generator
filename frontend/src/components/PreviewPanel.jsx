import React from "react";

export default function PreviewPanel({ thumbnail, isLoading, aspectRatio }) {
  // Map aspect ratio strings to Tailwind classes
  const aspectMap = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  };

  const aspectClass = aspectMap[aspectRatio] || "aspect-video";

  // Download handler
  const handleDownload = () => {
    if (!thumbnail) return;
    const link = document.createElement("a");
    link.href = thumbnail;
    link.download = "thumbnail.png"; // default filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/60 to-black/60 backdrop-blur-xl p-6 shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Preview</h2>

      <div
        className={`relative ${aspectClass} rounded-xl border-2 border-dashed border-indigo-500/30 flex items-center justify-center text-center overflow-hidden`}
      >
        {isLoading ? (
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-gray-400">Generating thumbnail...</p>
          </div>
        ) : thumbnail ? (
          <img
            src={thumbnail}
            alt="Generated Thumbnail"
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <div>
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-indigo-500/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h18M3 19h18M5 7l7 5-7 5"
                />
              </svg>
            </div>
            <p className="text-lg font-medium">Generate your first thumbnail</p>
            <p className="text-sm text-gray-400">
              Fill out the form and click Generate
            </p>
          </div>
        )}
      </div>

      {/* Download button */}
      {thumbnail && !isLoading && (
        <button
          onClick={handleDownload}
          className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Download Thumbnail
        </button>
      )}
    </div>
  );
}
