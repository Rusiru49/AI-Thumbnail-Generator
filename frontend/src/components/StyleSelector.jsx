import { useState } from 'react';
import { SparkleIcon, SquareIcon, PenToolIcon, ImageIcon, CpuIcon } from 'lucide-react';

export default function StyleSelector() {
  const [style, setStyle] = useState('Bold & Graphic');
  const [open, setOpen] = useState(false);

  const options = [
    {
      label: 'Bold & Graphic',
      icon: <SparkleIcon className="w-4 h-4 mr-2" />,
      description: 'High contrast, bold typography, striking visuals',
    },
    {
      label: 'Minimal & Clean',
      icon: <SquareIcon className="w-4 h-4 mr-2" />,
      description: 'Simple layouts, lots of whitespace, clean aesthetics',
    },
    {
      label: 'Cinematic',
      icon: <ImageIcon className="w-4 h-4 mr-2" />,
      description: 'Dramatic visuals, widescreen vibes, storytelling style',
    },
    {
      label: 'Illustrative',
      icon: <PenToolIcon className="w-4 h-4 mr-2" />,
      description: 'Hand-drawn or vector illustrations, artistic flair',
    },
    {
      label: 'Modern Tech',
      icon: <CpuIcon className="w-4 h-4 mr-2" />,
      description: 'Futuristic designs, sleek interfaces, tech-inspired',
    },
  ];

  const selectedOption = options.find(o => o.label === style);

  return (
    <div className="relative w-64">
      <label className="block text-sm mb-2 text-gray-300">Thumbnail Style</label>

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-black/40 border border-indigo-500/30 text-white outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <span className="flex items-center">
          {selectedOption?.icon}
          {style}
        </span>
        <span className="ml-2">▼</span>
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-full bg-black/90 border border-indigo-500/30 rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option.label}
              type="button"
              onClick={() => {
                setStyle(option.label);
                setOpen(false);
              }}
              className={`w-full flex items-center px-4 py-3 text-left hover:bg-indigo-500/20 transition ${
                style === option.label ? 'bg-indigo-500/20' : ''
              }`}
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      )}

      {/* Show description of the selected option */}
      <p className="text-xs text-gray-400 mt-1">{selectedOption?.description}</p>
    </div>
  );
}
