import { Loader2Icon } from "lucide-react";
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
    <div className="relative mx-auto w-full max-w-2xl">
      <div className={`relative overflow-hidden ${aspectMap[aspectRatio]}`}>
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/25">
            <Loader2Icon className="size-8 animate-spin" />
            <div className="text-center">
              <p className="text-lg font-bold text-white">Generating...</p>
              <p className="text-sm text-white/75">Please wait a moment</p>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}