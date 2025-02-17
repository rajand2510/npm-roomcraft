//import { Package2 } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import { Arcard } from "room-craft";

const DetailedPage = () => {
    const [copySuccess, setCopySuccess] = useState(false);
  //const codeString = `npm install roomcraft-package`;
  const codeString = `<Arcard
          gltfPath="/models/chair_djdf.glb"
          productName="Elegant Wooden Chair"
          productPrice='100'
          productDescription="" 
          // Pass the details as an array
          type="detailed" // AR and 3D card
          cardColor="#0ea493" // Optional: Set the card color
          textColor="#a9fee5" // Optional: Set text color
          cardStyle="minimal" //option :glassmorphism
          productRating="4"
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
  return (
    <div className="">
      <div className="h-[80%] flex flex-row text-gray-900">
        {/* Left Side: Code Block */}
        <section id="installationguide" className="pt-16 px-10 w-3/5">
          <h2 className="text-4xl mb-8 font-semibold">🛍 Product Info Card</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
          Explore detailed product information with RoomCraft! Below are various use cases<br/> demonstrating 
           how you can integrate RoomCraft into your project to display product<br/> details in an
            interactive 3D and AR experience.








          </p>
          <div className=" p-6 flex items-center space-x-4">

            <div>

              <div className="mt-2 relative">
                <SyntaxHighlighter language="jsx" style={solarizedlight}>
                  {codeString}
                </SyntaxHighlighter>
                <button
                  onClick={handleCopy}
                  className="absolute top-2 right-2 py-1 px-3 text-xs  flex items-center gap-2"
                >
                  {copySuccess ? (
                    <>
                      <ClipboardCheck size={20} className="text-amber-900/90  rounded " />

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
     
      </div>


      <div className="container mx-auto py-12">
      
        <Arcard
          gltfPath="/models/chair_djdf.glb"
          productName="Elegant Wooden Chair"
          productPrice='100'
          productDescription="A beautifully crafted wooden chair, designed for both style and comfort. Made from high-quality, durable wood, this chair features a smooth polished finish that highlights the natural grain patterns and elegance to any space."
          // Pass the details as an array
          type="detailed" // AR and 3D card

          cardColor="#0ea493" // Optional: Set the card color
          textColor="#a9fee5" // Optional: Set text color
          cardStyle="minimal"
          productRating="4"

        />


      </div>


    </div>
  );
};

export default DetailedPage;
