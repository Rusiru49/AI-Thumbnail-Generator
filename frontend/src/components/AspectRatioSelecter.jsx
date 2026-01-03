import { useState } from "react";
import { RectangleHorizontal, RectangleVertical } from "lucide-react";

export default function AspectRatioSelecter() {
  const [aspectRatio, setAspectRatio] = useState("16:9");

  const iconMap = {
    "16:9": <RectangleHorizontal className="w-5 h-5" />,
    "1:1": <RectangleHorizontal className="w-5 h-5 rotate-90" />,
    "9:16": <RectangleVertical className="w-5 h-5" />,
  };

  return (
    <div>
      <label className="block text-sm mb-3 text-gray-300">Aspect Ratio</label>
      <div className="flex gap-3">
        {["16:9", "1:1", "9:16"].map((ratio) => (
          <button
            key={ratio}
            type="button"
            onClick={() => setAspectRatio(ratio)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
              aspectRatio === ratio
                ? "border-indigo-500 bg-indigo-500/20 text-white"
                : "border-gray-700 text-gray-400 hover:border-indigo-400"
            }`}
          >
            {iconMap[ratio]}
            <span>{ratio}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
