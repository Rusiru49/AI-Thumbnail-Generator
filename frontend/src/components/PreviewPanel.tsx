import { Loader2Icon, DownloadIcon } from "lucide-react";
import type { AspectRatio, IThumbnail } from "../assets/assets";

export default function PreviewPanel({ thumbnail, isLoading, aspectRatio } :
  {thumbnail: IThumbnail | null, isLoading: boolean, aspectRatio: AspectRatio}
) {
  // Map aspect ratio strings to Tailwind classes
  const aspectMap = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  } as Record<AspectRatio, string>;

  // Download handler
  const handleDownload = () => {
    if (!thumbnail?.image_url) return;
    window.open(thumbnail.image_url, "_blank");
  };

  return (
  <div className="relative mx-auto w-full max-w-3xl">

    {/* Card */}
    <div className="relative rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-black p-6 shadow-2xl ring-1 ring-white/10">
      
      {/* Preview Frame */}
      <div
        className={`relative overflow-hidden rounded-2xl border-2 border-dashed border-indigo-500/40 bg-gradient-to-br from-slate-900 to-black ${aspectMap[aspectRatio]}`}
      >
        {/* Thumbnail */}
        {thumbnail?.image_url && !isLoading && (
          <img
            src={thumbnail.image_url}
            alt="Generated thumbnail"
            className="h-full w-full object-cover"
          />
        )}

        {/* Empty State */}
        {!thumbnail && !isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600/20 ring-1 ring-indigo-500/40">
              <span className="text-3xl font-semibold text-indigo-300">Σ</span>
            </div>
            <p className="text-xl font-medium text-white">
              Generate your first thumbnail
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Fill out the form and click Generate
            </p>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
            <Loader2Icon className="mb-4 size-10 animate-spin text-white" />
            <p className="text-lg font-medium text-white">
              Generating your thumbnail
            </p>
            <p className="text-sm text-gray-400">
              Please wait a moment…
            </p>
          </div>
        )}

        {/* Download Button */}
        {thumbnail?.image_url && !isLoading && (
          <button
            onClick={handleDownload}
            className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-500"
          >
            <DownloadIcon className="size-4" />
            Download
          </button>
        )}
      </div>
    </div>
  </div>
);
}