import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import SoftBackdrop from "../components/SoftBackdrop";
import AspectRatioSelecter from "../components/AspectRatioSelecter";
import StyleSelector from "../components/StyleSelector";
import ColorSchemeSelector from "../components/ColorSchemeSelector";
import PreviewPanel from "../components/PreviewPanel";

export default function Generate() {
  const { id } = useParams();
  const location = useLocation();

  // ✅ ONLY read data if navigated from MyGenerations
  const generationData = location.state?.generation || null;

  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [style, setStyle] = useState("Bold & Graphic");
  const [styleDropdownOpen, setStyleDropdownOpen] = useState(false);
  const [colorScheme, setColorScheme] = useState("Vibrant");

  // ✅ Thumbnail starts EMPTY
  const [thumbnail, setThumbnail] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // 🔥 Load data ONLY when coming from MyGenerations
  useEffect(() => {
    if (generationData) {
      setTitle(generationData.title || "");
      setThumbnail(generationData.image || null);
      setIsEditMode(true);
    }
  }, [generationData]);

  const generateThumbnail = async () => {
    if (!title.trim()) return alert("Please enter a title!");
    setLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 1500));

      const fakeThumbnail = `https://via.placeholder.com/512x512.png?text=${encodeURIComponent(
        title
      )}`;
      setThumbnail(fakeThumbnail);
      setIsEditMode(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
          <h1 className="text-4xl font-bold mb-4">
            {isEditMode ? "Edit Thumbnail" : "Generate Thumbnails"}
          </h1>

          {/* ✅ Edit mode banner ONLY when coming from MyGenerations */}
          {isEditMode && (
            <div className="mb-6 px-4 py-2 rounded-lg
              bg-indigo-600/20 border border-indigo-500/30
              text-indigo-300 text-sm">
              Editing a previously generated thumbnail
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT PANEL */}
            <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/60 to-black/60 backdrop-blur-xl p-6 space-y-6 shadow-xl">
              {/* Title */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Title or Topic
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-lg bg-black/40 border border-indigo-500/30 px-4 py-3"
                />
              </div>

              <AspectRatioSelecter
                value={aspectRatio}
                onChange={setAspectRatio}
              />

              <StyleSelector
                value={style}
                onChange={setStyle}
                isOpen={styleDropdownOpen}
                setIsOpen={setStyleDropdownOpen}
              />

              <ColorSchemeSelector
                colorScheme={colorScheme}
                setColorScheme={setColorScheme}
              />

              <textarea
                rows={4}
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                className="w-full rounded-lg bg-black/40 border border-indigo-500/30 px-4 py-3"
              />

              <button
                onClick={generateThumbnail}
                className="w-full py-3 rounded-xl font-semibold
                bg-gradient-to-r from-indigo-500 to-purple-600"
              >
                {loading
                  ? "Generating..."
                  : isEditMode
                  ? "Re-Generate Thumbnail"
                  : "Generate Thumbnail"}
              </button>

              {thumbnail && (
                <button
                  onClick={downloadThumbnail}
                  className="w-full py-3 rounded-xl font-semibold
                  bg-gradient-to-r from-green-500 to-emerald-600"
                >
                  Download Thumbnail
                </button>
              )}
            </div>

            {/* RIGHT PANEL */}
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
