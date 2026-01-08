import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import SoftBackdrop from "../components/SoftBackdrop";
import AspectRatioSelecter from "../components/AspectRatioSelecter";
import StyleSelector from "../components/StyleSelector";
import ColorSchemeSelector from "../components/ColorSchemeSelector";
import PreviewPanel from "../components/PreviewPanel";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import api from "../configs/api";
import {type IThumbnail, type AspectRatio, colorSchemes, type ThumbnailStyle, dummyThumbnails} from "../assets/assets"


export default function Generate() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const location = useLocation();

  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  // ✅ ONLY read data if navigated from MyGenerations
  const generationData = location.state?.generation || null;

  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("16:9");
  const [style, setStyle] = useState<ThumbnailStyle>("Bold & Graphic");
  const [styleDropdownOpen, setStyleDropdownOpen] = useState(false);
  const [colorScheme, setColorScheme] = useState<string>(colorSchemes[0].id);

  // ✅ Thumbnail starts EMPTY
  const [thumbnail, setThumbnail] = useState<IThumbnail | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // 🔥 Load data ONLY when coming from MyGenerations
  useEffect(() => {
    if (generationData) {
      setTitle(generationData.title || "");
      setThumbnail(generationData.image || null);
      setIsEditMode(true);
    }
  }, [generationData]);

  const fetchThumbnail = async () => {
    if(id) {
      const thumbnail: any = dummyThumbnails.find((thumbnail)=>thumbnail._id === id);
      setThumbnail(thumbnail);

      setAdditionalInfo(thumbnail.user_prompt);
      setTitle(thumbnail.title);
      setColorScheme(thumbnail.color_scheme);
      setAspectRatio(thumbnail.aspect_ratio);
      setStyle(thumbnail.style);
      setLoading(false)
    }
  };

  // ✅ Fetch thumbnail when ID exists and user is logged in
  useEffect(() => {
    if (id && isLoggedIn && !generationData) {
      fetchThumbnail();
    }
  }, [id, isLoggedIn]);

  // ✅ Poll for thumbnail updates when loading
  useEffect(() => {
    if (id && loading && isLoggedIn) {
      const interval = setInterval(() => {
        fetchThumbnail();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [id, loading, isLoggedIn]);

  // ✅ Clear thumbnail when navigating away from detail view
  useEffect(() => {
    if (!id && thumbnail) {
      setThumbnail(null);
      setIsEditMode(false);
    }
  }, [pathname, id]);

  const handleGenerate = async () => {
    if (!isLoggedIn) return toast.error("Please log in to generate a thumbnail!");
    if (!title.trim()) return alert("Please enter a title!");
    
    setLoading(true);
    
    try {
      const api_payload = {
        title,
        prompt: additionalInfo,
        aspect_ratio: aspectRatio,
        color_scheme: colorScheme,
        text_overlay: true,
      };

      const { data } = await api.post("/api/thumbnail/generate", api_payload);

      if (data.thumbnail) {
        navigate('/generate/' + data.thumbnail._id);
        toast.success(data.message);
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to generate thumbnail");
    } finally {
      setLoading(false);
    }
  };

  const downloadThumbnail = () => {
    if (!thumbnail?.image_url) return;
    const link = document.createElement("a");
    link.href = thumbnail.image_url;
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

          {/* ✅ Edit mode banner ONLY when in edit mode */}
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
                value={colorScheme}
                onChange={setColorScheme}
              />

              <textarea
                rows={4}
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                placeholder="Additional details (optional)"
                className="w-full rounded-lg bg-black/40 border border-indigo-500/30 px-4 py-3"
              />

              <button
                onClick={handleGenerate}
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold
                bg-gradient-to-r from-indigo-500 to-purple-600
                disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading
                  ? "Generating..."
                  : isEditMode
                  ? "Re-Generate Thumbnail"
                  : "Generate Thumbnail"}
              </button>

              {thumbnail?.image_url && (
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
            <div>
              <div className="p-6 rounded-2xl bg-white/8 border-indigo/10 shadow-xl">
                <h1 className="text-lg font-semibold text-indigo-400 mb-4">Preview</h1>
                  <PreviewPanel
                    thumbnail={thumbnail}
                    isLoading={loading}
                    aspectRatio={aspectRatio}
                  />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}