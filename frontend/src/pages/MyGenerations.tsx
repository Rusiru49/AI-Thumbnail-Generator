import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Download, Trash2, ImageIcon } from "lucide-react";
import SoftBackdrop from "../components/SoftBackdrop";
import { dummyThumbnails, IThumbnail } from "../assets/assets";

export default function MyGenerations() {

  const navigate = useNavigate();

  const aspectRatioClassMap : Record<string, string> = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]"
  }
  
  const [thumbnail, setThumbnail] = useState<IThumbnail[]>([])
  const [loading, setLoading] = useState(false)

  const fetchThumbnails = async () => {
    setThumbnail(dummyThumbnails as unknown as IThumbnail[])
    setLoading(false)
  }

  const handleDownload = (image_url: string) => {
    window.open(image_url, '_blank')
  }

  const handleDelete = async (id: string) => {
    console.log(id)
  }

  useEffect(() => {
    fetchThumbnails()
  }, [])

  return(
    <>
      <SoftBackdrop />

      <div className="flex flex-col items-center w-full min-h-screen px-4 py-12">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-white">My Generations</h1>
          <p className="text-sm text-white/60 mt-1">
            View and manage all your AI-generated thumbnails
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {Array.from({ length: 6 }).map((_, i) =>(
              <div
                key={i}
                className="aspect-video rounded-2xl bg-white/5 border border-white/10 shadow-lg animate-pulse"
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && thumbnail.length === 0 && (
          <div className="text-center py-24">
            <ImageIcon className="mx-auto mb-4 text-white/40" size={40} />
            <h3 className="text-lg font-semibold text-white">
              No Thumbnails yet
            </h3>
            <p className="text-sm text-indigo-400 mt-1">
              Generate your first thumbnail
            </p>
          </div>
        )}

        {/* Grid */}
        {!loading && thumbnail.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {thumbnail.map((thumb: IThumbnail) => {
              const aspectClass = aspectRatioClassMap[thumb.aspect_ratio || '16:9'];

              return (
                <div
                  key={thumb._id}
                  onClick={()=> navigate(`/generate/${thumb._id}`)}
                  className="group cursor-pointer"
                >
                  {/* Image Card */}
                  <div
                    className={`relative ${aspectClass} overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-indigo-500/20`}
                  >
                    {thumb.image_url ? (
                      <img
                        src={thumb.image_url}
                        alt={thumb.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-sm text-white/40">
                        {thumb.isGenerating ? 'Generating...' : 'No Image'}
                      </div>
                    )}

                    {/* Generating Overlay + Title */}
                    {thumb.isGenerating && (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
                          Generating…
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black/80 text-white text-sm font-medium">
                          <h3 className="text-sm font-semibold text line-clamp-2">{thumb.title}</h3>
                        </div>
                      </>
                    )}

                    {/* Show title if not generating */}
                    {!thumb.isGenerating && (
                      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black/80 text-white text-sm font-medium">
                        <h3 className="text-sm font-semibold text line-clamp-2">{thumb.title}</h3>
                      </div>
                    )}

                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  ) 
}
