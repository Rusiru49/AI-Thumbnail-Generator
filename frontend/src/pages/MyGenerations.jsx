import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Download, Trash2, ImageIcon } from "lucide-react";
import SoftBackdrop from "../components/SoftBackdrop";

export default function MyGenerations() {
  const navigate = useNavigate();

  const [generations, setGenerations] = useState([
    {
      id: 1,
      title: "Tech YouTube Thumbnail",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      id: 2,
      title: "Podcast Cover",
      image:
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    },
    {
      id: 3,
      title: "Travel Vlog Thumbnail",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
  ]);

  // 👉 OPEN IN GENERATE (REAL EDIT MODE)
  const openInGenerate = (item) => {
    localStorage.setItem(
      "selectedGeneration",
      JSON.stringify(item)
    );

    navigate("/generate", {
      state: {
        generation: item,
        from: "my-generations",
      },
    });
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    setGenerations((prev) => prev.filter((g) => g.id !== id));
  };

  const handleDownload = (imageUrl, title, e) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, "_")}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative">
      <SoftBackdrop />

      <div className="pt-28 min-h-screen text-gray-100">
        <main className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              My Generations
            </h1>
            <p className="text-gray-400 mt-2">
              Click a thumbnail to edit or regenerate it
            </p>
          </div>

          {generations.length === 0 && (
            <div className="flex flex-col items-center py-32">
              <ImageIcon className="w-14 h-14 text-indigo-400 mb-4" />
              <p className="text-gray-400">No generations yet</p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {generations.map((item) => (
              <div
                key={item.id}
                onClick={() => openInGenerate(item)}
                className="group cursor-pointer relative rounded-2xl overflow-hidden
                border border-indigo-500/20
                bg-gradient-to-br from-indigo-950/60 to-black/60
                backdrop-blur-xl shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-cover transition group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <button
                    onClick={(e) =>
                      handleDownload(item.image, item.title, e)
                    }
                    className="p-3 bg-indigo-600 rounded-full"
                  >
                    <Download />
                  </button>

                  <button
                    onClick={(e) => handleDelete(item.id, e)}
                    className="p-3 bg-red-600 rounded-full"
                  >
                    <Trash2 />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold truncate">{item.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Click to edit in Generate
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
