import { RectangleHorizontal, RectangleVertical, Square } from "lucide-react";
import type React from "react";
import { aspectRatios, type AspectRatio } from "../assets/assets";

export default function AspectRatioSelecter({value, onChange}: {
  value: AspectRatio,
  onChange: (ratio: AspectRatio) => void,
}) {

  const iconMap = {
    "16:9": <RectangleHorizontal className="w-5 h-5" />,
    "1:1": <Square className="w-5 h-5 rotate-90" />,
    "9:16": <RectangleVertical className="w-5 h-5" />,
  } as Record<AspectRatio, React.ReactNode>;

  return (
    <div>
      <label className="block text-sm mb-3 text-gray-300">Aspect Ratio</label>
      <div className="flex gap-3">
        {aspectRatios.map(ratio => {
          const selected = value === ratio;

          return(
            <button 
              key={ratio} 
              type="button" 
              onClick={() => onChange(ratio)}
              className={`flex flex-col items-center gap-2 px-4 py-3 rounded-lg border transition-all ${
                selected 
                  ? 'bg-blue-500 border-blue-500 text-white' 
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600'
              }`}
            >
              {iconMap[ratio]}
              <span className="text-xs tracking-widest">
                {ratio}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  );
}