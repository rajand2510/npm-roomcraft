//import { Package2 } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import { Arcard } from "room-craft";

const DemoPage = () => {
    const [copySuccess, setCopySuccess] = useState(false);
  //const codeString = `npm install roomcraft-package`;
  const codeString = `import { Arcard } from "room-craft";

<Arcard
  gltfPath="/models/tree_lamp.glb"
  type="custom-size" // card features
  cardColor="#ffffff" // Optional: Set the card color
  cardStyle="minimal" // Optional: Card style 
  customWidth="350px" // Minimum 250px suggested
    customHeight="350px" // Minimum 250px suggested
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
        <section id="installationguide" className="py-16 px-10 w-3/5">
          <h2 className="text-4xl mb-8 font-semibold">🎮 Demo</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Experience RoomCraft in action! Below are various use cases showcasing <br />
            how you can integrate <strong>RoomCraft</strong> into your project and customize <br />its behavior to enhance user interaction with 3D models and AR functionality.
          </p>
          <div className=" p-6 flex items-center space-x-4">

            <div>

              <div className="mt-4 relative">
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
        <section className="px-10 mb-8 mt-28 py-16 w-2/5">
          <Arcard
            gltfPath="/models/chair_djdf.glb"

            // productName="{product.name}"
            // price='100'
            // productDetails={[{
            //   description: product.description,
            //   image: product.image,
            // }]} // Pass the details as an array
            type="custom-size" // AR and 3D card
            cardColor="#ffffff" // Optional: Set the card color
            textColor="#ffffff" // Optional: Set text color
            cardStyle="minimal"
            customWidth="350px" // minimum 300 suggested
            customHeight="350px" // minimum 300 suggested
          />
        </section>

      </div>





      <div className="container mx-auto py-12">
        <h3 className="text-3xl font-bold text-center mb-8">Featured Products</h3>

        <Arcard
          gltfPath="/models/chair_djdf.glb"
          imageSrc="/image/17.png"
          productName="md nskdnvkd"
          productPrice='100'
          productDescription="hi ruchit where are come to library we want job becase we are job less hi ruchit where are come to library we want job becase we are job less
                hi ruchit where are come to library we want job becase we are job lesshi ruchit wher"
          // Pass the details as an array
          type="detailed" // AR and 3D card

          cardColor="rgba(173,109,244,0.5)" // Optional: Set the card color
          textColor="#ffffff" // Optional: Set text color
          cardStyle="minimal"
          productRating="4"

        />


      </div>


    </div>
  );
};

export default DemoPage;
