import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import {  faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faArrowRight as faArrowRightSolid } from '@fortawesome/free-solid-svg-icons';
import { Arcard } from "room-craft"; // Assuming this is the AR product card package
import { Clipboard, ClipboardCheck } from "lucide-react";
const Home = () => {
    const [copied, setCopied] = useState(false);
    const command = "npm i room-craft --force";
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    return (
        <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white min-h-screen flex  items-start justify-center"> {/* Change items-center to items-start */}
            {/* <Navbar  /> */}
                      <div className="flex  absolute  w-full mr-10 mt-4 justify-end space-x-4 mb-4">
    <a href="#" className="text-white">
    <FontAwesomeIcon className="text-2xl" icon={faGithub} />

    </a>
</div>
          <div className='flex flex-col mt-18'>
          
            <div className="text-center  px-4">
 


                <div className="bg-black bg-opacity-5 border-1 border-gray-500 border-opacity-5 bg-opacity-50 h-8 w-50 rounded-full inline-block mb-8">
                    <span className="text-white text-[12px]">Explore in AR  <FontAwesomeIcon className='text-amber-300' icon={faBolt} /></span>
                    <span className="text-white text-[12px]"> Try now</span>
                </div>
                <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold leading-tight mb-4">
    Bring Your Products to Life in <br />
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600">3D & Augmented Reality</span>
</h1>
<p className="text-[15px] md:text-[15px] lg:text-[15px] text-gray-400 mb-8 max-h-16 overflow-hidden">
    Seamlessly showcase products in 3D & AR with just a few lines of code.<br />
    Enhance your eCommerce experience with <span className="text-gray-200">RoomCraft</span>.
</p>

                <div className="flex justify-center space-x-4">
                    <a href="/dashboard" className="bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition">
                        Get Started  <FontAwesomeIcon icon={faArrowRightSolid} />
                    </a>
                    <div className="flex items-center bg-white/10 backdrop-blur-lg p-3 px-4 rounded-4xl border border-white/20 shadow-lg">
      <span className="text-white font-mono mr-2">{command}</span>
      <button onClick={copyToClipboard} className="text-white hover:text-gray-300">
        {copied ? <ClipboardCheck size={20} /> : <Clipboard size={20} />}
      </button>
    </div>
                </div>
            </div>
            <div className="flex mt-8 flex-row space-x-8">
            <Arcard
    gltfPath="/models/modern_chair.glb"
    imageSrc="/image/17.png"
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
    customWidth="250px" // minimum 300 suggested
    customHeight="250px" // minimum 300 suggested
  />
  <Arcard
    gltfPath="/models/indoor_snake_plant.glb"
    imageSrc="/image/17.png"
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
    customWidth="300px" // minimum 300 suggested
    customHeight="250px" // minimum 300 suggested
  />
  <Arcard
    gltfPath="/models/tree_lamp.glb"
    imageSrc="/image/17.png"
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
    customHeight="250px" // minimum 300 suggested
  />
</div>

              </div>
        </div>
    );
};

export default Home;