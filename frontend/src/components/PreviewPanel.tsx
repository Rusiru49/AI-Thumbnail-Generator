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
    <div className="relative mx-auto w-full max-w-4xl p-8">      
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm rounded-2xl">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500"></div>
              <div className="absolute top-0 left-0 h-16 w-16 animate-ping rounded-full border-4 border-blue-500 opacity-20"></div>
            </div>
            <p className="text-white text-base font-semibold tracking-wide">Generating thumbnail...</p>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Preview container */}
      <div className={`relative w-full ${aspectMap[aspectRatio]} bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-blue-500/10 ${thumbnail?.image_url ? 'border-2 border-slate-700' : 'border-2 border-dashed border-slate-600'}`}>
        {thumbnail?.image_url ? (
          <>
            <img 
              src={thumbnail.image_url} 
              alt="Thumbnail preview"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            
            {/* Gradient overlay for button visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Download button overlay */}
            <button
              onClick={handleDownload}
              className="absolute bottom-6 right-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-200 flex items-center gap-2 transform hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-slate-400 p-8">
            <div className="text-center max-w-md">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-xl">
                  <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-ping"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Generate Your First Thumbnail</h3>
              <p className="text-base text-slate-400 leading-relaxed">Fill out the form with your video details and click Generate to create a stunning thumbnail</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}