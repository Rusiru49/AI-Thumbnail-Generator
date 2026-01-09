import { SparkleIcon, SquareIcon, PenToolIcon, ImageIcon, CpuIcon } from 'lucide-react';
import { ThumbnailStyle } from '../assets/assets';

export default function StyleSelector({value, onChange, isOpen, setIsOpen}: {
  value: ThumbnailStyle; 
  onChange: (style: ThumbnailStyle) => void; 
  isOpen: boolean; 
  setIsOpen: (open: boolean) => void;
}) {
  const options = [
    {
      label: 'Bold & Graphic' as ThumbnailStyle,
      icon: <SparkleIcon className="w-4 h-4 mr-2" />,
      description: 'High contrast, bold typography, striking visuals',
    },
    {
      label: 'Minimal & Clean' as ThumbnailStyle,
      icon: <SquareIcon className="w-4 h-4 mr-2" />,
      description: 'Simple layouts, lots of whitespace, clean aesthetics',
    },
    {
      label: 'Photorealistic' as ThumbnailStyle,
      icon: <ImageIcon className="w-4 h-4 mr-2" />,
      description: 'Dramatic visuals, widescreen vibes, storytelling style',
    },
    {
      label: 'Illustrated' as ThumbnailStyle,
      icon: <PenToolIcon className="w-4 h-4 mr-2" />,
      description: 'Hand-drawn or vector illustrations, artistic flair',
    },
    {
      label: 'Tech/Futuristic' as ThumbnailStyle,
      icon: <CpuIcon className="w-4 h-4 mr-2" />,
      description: 'Futuristic designs, sleek interfaces, tech-inspired',
    },
  ];

  const selectedOption = options.find(o => o.label === value);

  return (
    <div className="relative w-64">
      <label className="block text-sm mb-2 text-gray-300">Thumbnail Style</label>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-black/40 border border-indigo-500/30 text-white outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <span className="flex items-center">
          {selectedOption?.icon}
          {value}
        </span>
        <span className="ml-2">▼</span>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-black/90 border border-indigo-500/30 rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option.label}
              type="button"
              onClick={() => {
                onChange(option.label);
                setIsOpen(false);
              }}
              className={`w-full flex items-center px-4 py-3 text-left hover:bg-indigo-500/20 transition ${
                value === option.label ? 'bg-indigo-500/20' : ''
              }`}
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      )}

      <p className="text-xs text-gray-400 mt-1">{selectedOption?.description}</p>
    </div>
  );
}