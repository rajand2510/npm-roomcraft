//import { Package2 } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Arcard } from "3d-ar-product-card";

const CustomizablePage = () => {
  const [type, setType] = useState("3d-ar");
  const [cardColor, setCardColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#111111");
  const [cardStyle, setCardStyle] = useState("minimal");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (style) => {
    if(style === "glassmorphism"){
      setCardColor("")
    }
    setCardStyle(style);
   
    setIsOpen(false); // Close dropdown after selection
  };
  return (
    
    <div className=" bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      <div className="h-[80%] flex flex-row text-gray-900">
        {/* Left Side: Code Block */}
        <section id="installationguide" className="py-16 px-10 w-3/5">
          <h2 className="text-4xl mb-8 font-semibold">🎮 Demo</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Experience RoomCraft in action! Below are various use cases showcasing <br />
            how you can integrate <strong>RoomCraft</strong> into your project and customize <br />
            its behavior to enhance user interaction with 3D models and AR functionality.
          </p>

          <div className="bg-white p-6 flex items-center space-x-4">
            <div>
              <div className="mt-4">
                <SyntaxHighlighter language="jsx" style={solarizedlight}>
                  {`import { Arcard } from "3d-ar-product-card";

<Arcard
  gltfPath="/models/chair_djdf.glb"
  productName="Hello world"
  type="${type}"
  cardColor="${cardColor}"
  textColor="${textColor}"
  cardStyle="${cardStyle}"
/>`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Product Card */}
        <section className="  mb-8 mt-26 py-16 w-2/5">
          {/* AR Card Component */}
          
          <Arcard
            gltfPath="/models/chair_djdf.glb"
            productName="Hello world"
            type={type}
            cardColor={cardColor}
            textColor={textColor}
            cardStyle={cardStyle}
          />

          {/* Dropdown Customization Controls */}
         
        </section>
      </div>
   <div className=" p-4 -m-14 shadow-sm rounded-xl  bg-white flex flex-wrap items-center gap-2 w-2/5 ml-9 border border-gray-300">

  {/* Type Dropdown */}


  {/* Card Color Picker */}
  
  <label className="block text-sm font-medium mb-2 ">Card</label>
  <input type="color"
    value={cardColor}
    onChange={(e) => setCardColor(e.target.value)}
  className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700" id="hs-color-input" title="Choose your color"></input>
  
  <label className="block text-sm font-medium mb-2 ">Font</label>
  <input type="color"
    value={textColor}
    onChange={(e) => setTextColor(e.target.value)}
  className="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700" id="hs-color-input" title="Choose your color"></input>
  {/* Text Color Picker */}


  {/* Card Style Dropdown */}
  <div className="relative inline-flex">
     
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="py-2 px-4 ml-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-100 focus:ring focus:ring-blue-300 transition"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        {cardStyle === "glassmorphism" ? "Glassmorphism" : "Minimal"}
        <svg
          className={`size-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 min-w-40 bg-white shadow-md rounded-md z-10 border border-gray-200"
          role="menu"
          aria-orientation="vertical"
        >
          <button
            className="block w-full text-left py-2 px-3 text-sm text-gray-800 hover:bg-gray-100"
            onClick={() => handleSelect("minimal")}
          >
            Minimal
          </button>
          <button
            className="block w-full text-left py-2 px-3 text-sm text-gray-800 hover:bg-gray-100"
            onClick={() => handleSelect("glassmorphism")}
          >
            Glassmorphism
          </button>
        </div>
      )}
    </div>
</div>



   </div>
  );
};

export default CustomizablePage;
