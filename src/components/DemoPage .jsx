//import { Package2 } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Arcard } from "3d-ar-product-card";

const DemoPage = () => {
    //const codeString = `npm install roomcraft-package`;

  return (
    <div className=" bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
    <div className="h-[80%] flex flex-row text-gray-900">
      {/* Left Side: Code Block */}
      <section id="installationguide" className="py-16 px-10 w-3/5">
                <h2 className="text-4xl mb-8 font-semibold">🎮 Demo</h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                Experience RoomCraft in action! Below are various use cases showcasing <br />
                how you can integrate <strong>RoomCraft</strong> into your project and customize <br />its behavior to enhance user interaction with 3D models and AR functionality.
                </p>
               <div className="bg-white p-6 flex items-center space-x-4">

                    <div>
                     
                        <div className="mt-4">
                        <SyntaxHighlighter language="jsx" style={solarizedlight}>
                                {`import { Arcard } from "3d-ar-product-card";

<Arcard
  gltfPath="/models/tree_lamp.glb"
  type="custom-size" // card features
  cardColor="#ffffff" // Optional: Set the card color
  cardStyle="minimal" // Optional: Card style 
  customWidth="350px" // Minimum 250px suggested
    customHeight="350px" // Minimum 250px suggested
/>
`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-10 mb-8 mt-26 py-16 w-2/5">
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
   




    {/* <div className="container mx-auto py-12">
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

                cardColor="" // Optional: Set the card color
                textColor="#ffffff" // Optional: Set text color
                cardStyle="glassmorphism"
                productRating="4"
              
              />
    

</div> */}

   
    </div>
  );
};

export default DemoPage;
