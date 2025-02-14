//import { Package2 } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard, ClipboardCheck } from 'lucide-react';
import { Arcard } from "room-craft";

const CustomizablePage = () => {
  const [cardtype, setCardType] = useState("3d-ar");
  const [cardColor, setCardColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#111111");
  const [cardStyle, setCardStyle] = useState("minimal");
  const [productName,setProductName] = useState("Modern Chair")

  const [isOpen, setIsOpen] = useState(false);
  const [isOpentype, setIsOpentype] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [copySuccess, setCopySuccess] = useState(false);

  const codeString = `
  <Arcard
    gltfPath="/models/chair_djdf.glb"
    productName="Hello world"
    type="${cardtype}" 
    cardColor="${cardColor}"
    textColor="${textColor}"
    cardStyle="${cardStyle}"
  />
`;
const handleCopy = () => {
  navigator.clipboard.writeText(codeString)
    .then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500); // Reset after 2 seconds
    })
    .catch((error) => setCopySuccess(false));
};

  const handleType = (cardlook) => {
    setCardType(cardlook);
    setIsOpentype(false); // Close the menu after selecting a type
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    if (!isChecked) {
      setProductName("Modern Chair");
      
    } else {
      setProductName(null);
    
    }
    // setDisabled(!isChecked);
  }
  const handleSelect = (style) => {
    if(style === "glassmorphism"){
      setCardColor("")
    }
    setCardStyle(style);
   
    setIsOpen(false); // Close dropdown after selection
  };

    // const toggleDisable = () => {
    //   if (disabled) {
    //     setProductName("Modern Chair");
    //   } else {
    //     setProductName(null);
    //   }
    //   setDisabled(!disabled);
    // };

  return (
    <>
    <div>
      <div className="h-[80%] flex flex-row text-gray-900">
        {/* Left Side: Code Block */}
        <section id="installationguide" className="py-16 px-10 w-3/5">
          <h2 className="text-4xl mb-8 font-semibold">📱 3D-AR sm</h2>
          
          <p className="mt-4 text-gray-700 leading-relaxed">
         
            Experience RoomCraft&apos;s 3D and AR functionality in action! Below is an <br />
            interactive product card showcasing how you can integrate RoomCraft&apos;s npm <br />
            package into your project. Customize the card style and preview changes in
  real time.
          </p>

          <div className=" p-6 flex items-center space-x-4">
            <div>
              <div className="mt-4  relative">
                <SyntaxHighlighter language="jsx" style={solarizedlight}  customStyle={{paddingTop:"15px", paddingRight:"60px" }}>
                  {`<Arcard
  gltfPath="/models/chair_djdf.glb"
  productName="${productName}"
  type="${cardtype}" 
  cardColor="${cardColor}"
  textColor="${textColor}"
  cardStyle="${cardStyle}"
/>`}
                </SyntaxHighlighter>
                <button
        onClick={handleCopy}
        className="absolute top-2 right-2 py-1 px-3 text-xs  flex items-center gap-2"
      >
        {copySuccess ? (
          <>
            <ClipboardCheck size={20} className="text-amber-900/90  rounded "/>
          
          </>
        ) : (
          <>
            <Clipboard size={20} className="text-amber-900/70  rounded hover:text-amber-700/70" />
         
          </>
        )}
      </button>
              </div>
            </div>
          </div>
        </section>

        {/* Right Side: Product Card */}
       
       
          {/* AR Card Component */}
          {cardtype == "3d-ar" && (
             <section className="  mb-8 mt-55 w-2/5">
          <Arcard
            gltfPath="/models/chair_djdf.glb"
            productName={productName}
            type="3d-ar"
            cardColor={cardColor}
            textColor={textColor}
            cardStyle={cardStyle}
          />
          </section>
        )}
            {cardtype == "3d-only" && (
          <section className=" mb-8 mt-55  w-2/5  ">
 <Arcard
            gltfPath="/models/chair_djdf.glb"
            productName={productName}
            type="3d-only"
            cardColor={cardColor}
            textColor={textColor}
            cardStyle={cardStyle}
           
          />
        
              </section>
           )}
          {/* Dropdown Customization Controls */}
         
    
      </div>
 



   </div>
   <div className="p-4 -mt-8  shadow-sm rounded-xl z-10 absolute bg-white flex flex-wrap items-center gap-2 w-auto ml-9">


     {/* Type Dropdown */}
   
   
     {/* Card Color Picker */}
     
     <label className="block text-sm font-medium  ">Card</label>
     <input type="color"
       value={cardColor}
       onChange={(e) => setCardColor(e.target.value)}
     className="p-1 h-10 w-14 block bg-white shadow-sm cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700" id="hs-color-input" title="Choose your color"></input>
     
     <label className="block text-sm font-medium  ">Font</label>
     <input type="color"
       value={textColor}
       onChange={(e) => setTextColor(e.target.value)}
     className="p-1 h-10 w-14 block bg-white shadow-sm cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700" id="hs-color-input" title="Choose your color"></input>
     {/* Text Color Picker */}
   
     <div className="relative inline-flex">
      <button
        type="button"
        onClick={() => setIsOpentype(!isOpentype)} // Use setter function to toggle state
        className="py-2 px-4 ml-2 w-[110px] inline-flex items-center gap-x-2 text-sm font-medium rounded-md  bg-white text-gray-800 shadow-sm hover:bg-gray-100 focus:ring focus:ring-blue-300 transition"
        aria-haspopup="menu"
        aria-expanded={isOpentype}
      >
        {cardtype === "3d-ar" ? "3d-ar" : "3d-only"}
        <svg
          className={`size-4 transition-transform ${isOpentype ? "rotate-180" : ""}`}
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

      {isOpentype && (
        <div
          className="absolute left-0 top-10 min-w-40 bg-white shadow-sm rounded-md z-10 "
          role="menu"
          aria-orientation="vertical"
        >
          <button
            className="block w-full text-left py-2 px-3 text-sm text-gray-800 hover:bg-gray-100"
            onClick={() => handleType("3d-ar")}
          >
            3d-ar
          </button>
          <button
            className="block w-full text-left py-2 px-3 text-sm text-gray-800 hover:bg-gray-100"
            onClick={() => handleType("3d-only")}
          >
            3d-only
          </button>
        </div>
      )}
    </div>
     {/* Card Style Dropdown */}
     <div className="relative inline-flex">
        
         <button
           type="button"
           onClick={() => setIsOpen(!isOpen)}
           className="py-2 px-4 ml-2 inline-flex w-[160px] items-center gap-x-2 text-sm font-medium rounded-md  bg-white text-gray-800 shadow-sm hover:bg-gray-100 focus:ring focus:ring-blue-300 transition"
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
             className="absolute left-0 top-10 min-w-40  bg-white shadow-md rounded-md z-10 "
             role="menu"
             aria-orientation="vertical"
           >
             <button
               className="block w-full text-left py-2 px-3  text-sm text-gray-800 hover:bg-gray-100"
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
       <label className='autoSaverSwitch relative inline-flex cursor-pointer  select-none items-center'>
       <span className='label flex items-center px-1 text-sm font-medium text-black'>
             Product Name 
           </span>
           <input
             type='checkbox'
             name='autoSaver'
             className='sr-only '
             checked={isChecked}
             onChange={handleCheckboxChange}
           />
           <span
             className={`slider mr-3 flex h-[26px] w-[50px]  shadow-sm items-center rounded-full p-1 duration-200 ${
               isChecked ? 'bg-primary' : 'bg-white'
             }`}
           >
             <span
               className={`dot h-[18px] w-[18px] rounded-full  uration-200 ${
                 isChecked ? 'translate-x-6 bg-blue-500' : 'bg-gray-300'
               }`}
             ></span>
           </span>
          
         </label>
   </div>
   </>
  );
};

export default CustomizablePage;
