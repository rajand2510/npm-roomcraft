//import { Package2 } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { Clipboard, ClipboardCheck } from 'lucide-react';
import { Arcard } from "room-craft";

const DemoPage = () => {
    const [copySuccess, setCopySuccess] = useState(false);
  //const codeString = `npm install roomcraft-package`;
  const propsTable = [
    {
      type: "detailed",
      styles: ["minimal", "glassmorphism"],
      props: ["gltfPath", "productName", "productPrice", "productDescription", "productRating", "cardColor", "textColor"],
    },
    {
      type: "3d-ar",
      styles: ["minimal", "glassmorphism"],
      props: ["gltfPath", "productName", "productPrice", "cardColor", "textColor"],
    },
    {
      type: "3d-only",
      styles: ["minimal", "glassmorphism"],
      props: ["gltfPath", "productName", "productPrice", "cardColor", "textColor"],
    },
    {
      type: "custom-size",
      styles: ["minimal", "glassmorphism"],
      props: ["gltfPath", "customWidth","customHeight", "cardColor"],
    },
  ];
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




      <div className="max-w-5xl mx-auto p-8 bg-white shadow-sm rounded-2xl ">


        <table className="w-full border-collapse">
          <thead className=" ">
            <tr>
              <th className="px-6 py-3 text-left text-lg font-semibold">Type</th>
              <th className="px-6 py-3 text-left text-lg font-semibold">Available Styles</th>
              <th className="px-6 py-3 text-left text-lg font-semibold">Included Props</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {propsTable.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-all">
                <td className="px-6 py-4 text-gray-800 font-medium">{row.type}</td>
                <td className="px-6 py-4 text-gray-600">{row.styles.join(", ")}</td>
                <td className="px-6 py-4 text-gray-600">
                  <ul className="  space-y-1">
                    {row.props.map((prop, i) => (
                      <li key={i} className="text-sm text-gray-700">{prop}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  


    </div>
  );
};

export default DemoPage;
