import { QrCode, Package2, Smartphone, Layers, Zap, Settings2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="h-[80%] text-gray-900">
     

      {/* Overview Section */}
      <section className="py-16 px-10 max-w-4xl">
        <h2 className="text-4xl mb-8 font-semibold">🚀 Overview</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          <strong>RoomCraft</strong> simplifies 3D model rendering and AR integration <br/>
           in React applications.Ideal for   <strong>eCommerce, product previews, and  AR </strong><br/>
          <strong> showrooms </strong>, this package makes immersive experiences effortless.
        </p>
      </section>

      {/* Features Section */}
      <section className="px-10 ">
        <h2 className="text-2xl mb-8 font-semibold">✨ Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            [Package2, "Easy AR Integration", "Seamlessly load 3D models with built-in AR support."],
            [Smartphone, "Cross-Platform", "Works on both desktop (3D preview) and mobile (AR mode)."],
            [Layers, "Supports Multiple Formats", "GLTF, GLB more."],
            [Zap, "Interactive 3D Viewer", "Built-in controls for rotation, zoom, and panning."],
            [Settings2, "Customizable", "Easily configure size, background, and placement settings."],
            [QrCode, "QR Code Integration", "Access AR mode instantly via a product page QR scan."]


          ].map(([Icon, title, desc], idx) => (
            <div key={idx} className="bg-white p-6 shadow-sm rounded-xl flex items-start space-x-4">
              <Icon className="w-10 h-10 text-blue-500" />
              <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
