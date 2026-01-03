import { useState } from "react";
import { useParams } from "react-router-dom";
import SoftBackdrop from "../components/SoftBackdrop";
import AspectRatioSelecter from "../components/AspectRatioSelecter";
import StyleSelector from "../components/StyleSelector";
import ColorSchemeSelector from "../components/ColorSchemeSelector";
import PreviewPanel from "../components/PreviewPanel";

export default function Generate() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [style, setStyle] = useState("Bold & Graphic");
  const [styleDropdownOpen, setStyleDropdownOpen] = useState(false);
  const [colorScheme, setColorScheme] = useState("Vibrant");

  // ✅ Added thumbnail state
  const [thumbnail, setThumbnail] = useState(null);

  // Simulated thumbnail generation function (replace with your API call)
  const generateThumbnail = async () => {
    if (!title.trim()) return alert("Please enter a title!");
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise((res) => setTimeout(res, 1500));

      // Example: generate a fake thumbnail URL
      const fakeThumbnail = `https://via.placeholder.com/512x512.png?text=${encodeURIComponent(
        title
      )}`;
      setThumbnail(fakeThumbnail);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Download thumbnail function
  const downloadThumbnail = () => {
    if (!thumbnail) return;
    const link = document.createElement("a");
    link.href = thumbnail;
    link.download = `${title || "thumbnail"}.png`;
    link.click();
  };

  return (
    <>
      <SoftBackdrop />

      <div className="pt-28 min-h-screen text-gray-100">
        <main className="max-w-6xl mx-auto px-4">
          {/* Page Title */}
          <h1 className="text-4xl font-bold mb-10">Generate Thumbnails</h1>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT PANEL */}
            <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/60 to-black/60 backdrop-blur-xl p-6 space-y-6 shadow-xl">
              <div>
                <h2 className="text-2xl font-semibold">Create Your Thumbnail</h2>
                <p className="text-gray-400 text-sm">
                  Describe your vision and let AI bring it to life
                </p>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Title or Topic
                </label>
                <input
                  type="text"
                  value={title}
                  maxLength={100}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. 10 Tips for Better Sleep"
                  className="w-full rounded-lg bg-black/40 border border-indigo-500/30 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex justify-end text-xs text-gray-400 mt-1">
                  <span className="text-xs text-zinc-400">{title.length}/100</span>
                </div>
              </div>

              {/* Aspect Ratio */}
              <AspectRatioSelecter value={aspectRatio} onChange={setAspectRatio} />

              {/* Style */}
              <StyleSelector
                value={style}
                onChange={setStyle}
                isOpen={styleDropdownOpen}
                setIsOpen={setStyleDropdownOpen}
              />

              {/* Color Scheme */}
              <ColorSchemeSelector
                colorScheme={colorScheme}
                setColorScheme={setColorScheme}
              />

              {/* Additional Info */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Additional Details (optional)
                </label>
                <textarea
                  rows={4}
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder="Add any specific elements, mood, or style preferences..."
                  className="w-full rounded-lg bg-black/40 border border-indigo-500/30 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
              </div>

              {/* Generate & Download Buttons */}
              <div className="flex flex-col gap-3">
                {!id && (
                  <button
                    type="button"
                    className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition shadow-lg"
                    onClick={generateThumbnail}
                  >
                    {loading ? "Generating..." : "Generate Thumbnail"}
                  </button>
                )}

                {/* Download button */}
                {thumbnail && (
                  <button
                    type="button"
                    className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 transition shadow-lg"
                    onClick={downloadThumbnail}
                  >
                    Download Thumbnail
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT PANEL – PREVIEW */}
            <PreviewPanel
              thumbnail={thumbnail}
              isLoading={loading}
              aspectRatio={aspectRatio}
            />
          </div>
        </main>
      </div>
    </>
  );
}
