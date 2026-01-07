import { colorSchemes } from "../assets/assets";

export default function ColorSchemeSelector({ value, onChange }: {
  value: string;
  onChange: (color: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm mb-3 text-gray-300">
        Color Scheme
      </label>
      <div className="flex flex-wrap gap-3">
        {colorSchemes.map((scheme) => {
          const isSelected = value === scheme.id;
          
          return (
            <button
              key={scheme.id}
              type="button"
              onClick={() => onChange(scheme.id)}
              title={scheme.name}
              className={`
                w-12 h-12 rounded-lg border-2 p-1 flex transition
                ${isSelected ? "border-indigo-400" : "border-gray-700 hover:border-gray-400"}
              `}
            >
              {scheme.colors.map((color, i) => (
                <div
                  key={i}
                  className="flex-1 rounded"
                  style={{ backgroundColor: color }}
                />
              ))}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-gray-400 mt-2">
        Selected: {colorSchemes.find((scheme) => scheme.id === value)?.name}
      </p>
    </div>
  );
}