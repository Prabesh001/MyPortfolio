import SharinganEye from "./Shringan";

export default function SharinganContainer({ size = 300 }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="relative animate-float">
        <div
          className="rounded-full  bg-red-600 relative z-10 hover:scale-105 transition-transform duration-300 overflow-hidden"
          style={{ width: size, height: size }}
        >
          <div className="w-full h-full">
            <SharinganEye />
          </div>
        </div>
      </div>
    </div>
  );
}
