export default function ColorSchemeSelector({ colorScheme, setColorScheme }) {
  const schemes = [
    { name: "Vibrant", colors: ["#FF6B6B", "#4DD0E1", "#FFE66D"] },
    { name: "Indigo", colors: ["#FF7043", "#AB47BC", "#8E24AA"] },
    { name: "Teal", colors: ["#42A5F5", "#90CAF9", "#1976D2"] },
    { name: "Emerald", colors: ["#388E3C", "#66BB6A", "#A5D6A7"] },
    { name: "Purple", colors: ["#9C27B0", "#BA68C8", "#7B1FA2"] },
    { name: "Monochrome", colors: ["#212121", "#616161", "#BDBDBD"] },
    { name: "Neon", colors: ["#FF00FF", "#00FFFF", "#FFFF66"] },
    { name: "Pastel", colors: ["#FBC4AB", "#FEE2DC", "#FFF1E0"] },
  ];

  return (
    <div>
      <label className="block text-sm mb-3 text-gray-300">
        Color Scheme
      </label>
      <div className="flex flex-wrap gap-3">
        {schemes.map((scheme) => {
          const isSelected = colorScheme === scheme.name;
          return (
            <button
              key={scheme.name}
              type="button"
              onClick={() => setColorScheme(scheme.name)}
              className={`
                w-12 h-12 rounded-lg border-2 p-1 flex transition
                ${isSelected ? "border-indigo-400" : "border-gray-700 hover:border-gray-400"}
              `}
            >
              {scheme.colors.map((c, i) => (
                <div
                  key={i}
                  className="flex-1 rounded"
                  style={{ backgroundColor: c }}
                />
              ))}
            </button>
          );
        })}
      </div>
      <p className="text-xs text-gray-400 mt-2">
        Selected: {colorScheme}
      </p>
    </div>
  );
}
