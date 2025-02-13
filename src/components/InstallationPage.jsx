import { Package2, Route, Code, BookCheck, CheckCircle, ArrowRightCircle, Library, Network } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';



export default function InstallationPage() {
    const codeString = `npm install roomcraft-package`;


    return (
        <div className="h-[80%] text-gray-900">


            {/* Overview Section */}
            <section id="installationguide" className="py-16 px-10 max-w-4xl">
                <h2 className="text-4xl mb-8 font-semibold">📦 Installation Guide</h2>
                <p className="mt-4 text-gray-700 leading-relaxed">
                Welcome to the <strong>RoomCraft</strong> package! This guide will walk you through the installation and setup process, so you can seamlessly integrate RoomCraft into your project and enjoy its powerful features for augmented reality (AR) and 3D product viewing.
                </p>
            </section>

            <section className="px-10 mb-8">
                <h2 className="text-2xl mb-2 flex flex-row gap-2 font-semibold ">   <Network className="w-8 h-8 text-blue-500" /><h1>Supported Frameworks</h1></h2>

                <div className=" p-6 flex items-center space-x-4">

                    <div>
                        <p className="text-gray-600 ">
                            The package is designed to work seamlessly with the following frameworks:
                        </p>
                        <ul className="mt-4 flex space-x-4">
                            <li className="flex items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                                    <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                                </svg>
                                <p className="p-3">React</p>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                                    <path fill="#9575cd" d="M44.86,9.976L25.023,45.448c-0.41,0.732-1.462,0.737-1.878,0.008L2.915,9.979 C2.462,9.185,3.141,8.223,4.041,8.384l19.859,3.55c0.127,0.023,0.256,0.022,0.383-0.001l19.443-3.544 C44.623,8.225,45.305,9.18,44.86,9.976z"></path><path fill="#fbc02d" d="M33.574,3.01L19.019,5.862c-0.239,0.047-0.416,0.25-0.431,0.493l-0.895,15.121 c-0.021,0.356,0.306,0.633,0.654,0.552l4.052-0.935c0.379-0.087,0.722,0.246,0.644,0.628l-1.204,5.895 c-0.081,0.397,0.291,0.736,0.679,0.618l2.503-0.76c0.388-0.118,0.761,0.222,0.679,0.62l-1.913,9.26 c-0.12,0.579,0.651,0.895,0.972,0.398l0.215-0.332l11.86-23.669c0.199-0.396-0.144-0.848-0.579-0.764l-4.171,0.805 c-0.392,0.076-0.725-0.289-0.615-0.673l2.722-9.438C34.301,3.299,33.967,2.933,33.574,3.01z"></path>
                                </svg>

                                <p className="p-3">Vite</p>
                            </li>

                        </ul>
                    </div>
                </div>

            </section>
            {/* Step 1: Install the Package */}
            <section className="px-10 mb-8">
                <h2 className="text-2xl mb-2 flex flex-row gap-2 font-semibold ">   <Package2 className="w-8 h-8 text-blue-500" /><h1>Step 1: Install the Package</h1></h2>
                <div className=" p-6 flex items-center space-x-4">

                    <div>
                        <p className="text-gray-600 ">
                            To get started, install the package via npm by running the following command in your terminal:
                        </p>
                        <div className="mt-4">
                            <SyntaxHighlighter language="bash" style={solarizedlight}>
                                {codeString}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step 2: Peer Dependencies */}
            <section className="px-10 mb-8">
                <h2 className="text-2xl mb-2 flex flex-row gap-2 font-semibold ">   <ArrowRightCircle className="w-8 h-8 text-blue-500" />
                    <h1>Step 2: Install Peer Dependencies</h1></h2>
                <div className=" p-6 flex items-center space-x-4">

                    <div>
                        <p className="text-gray-600 ">
                            Ensure that your project has the required dependencies to use this package:
                        </p>

                        <ul className="space-y-4 mt-5">
                            <li className="flex items-center space-x-3">
                                <Library className="w-6 h-6 text-blue-500" />
                                <span className="text-gray-700 text-md font-medium">React 17+</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Code className="w-6 h-6 text-purple-500" />
                                <span className="text-gray-700 text-md font-medium">ReactDOM 17+</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Step 3: Routing XR */}
            <section className="px-10 mb-8">
                <h2 className="text-2xl mb-2 flex flex-row gap-2 font-semibold ">   <Route className="w-8 h-8 text-blue-500" />
                    <h1>Step 3: Routing Setup</h1></h2>
                <div className=" p-6 flex items-center space-x-4">

                    <div>
                        <p className="text-gray-600 ">
                            1️⃣ Create the AR component (<strong>Arcomponent.js</strong>):
                        </p>
                        <div className="mt-4">
                            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                                {`import { useLocation } from 'react-router-dom';
import { XrHitModelContainer } from '3d-ar-product-card';

const Arcomponent = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const gltfPath = params.get('gltfPath') || './models/default.gltf';

  console.log("gltfPath:", gltfPath); // Log for debugging

  return (
    <>
      {gltfPath ? (
        <XrHitModelContainer gltfPath={gltfPath} />
      ) : (
        <p>Error: No valid GLTF path provided.</p>
      )}
    </>
  );
};

export default Arcomponent;`}
                            </SyntaxHighlighter>

                        </div>
                    </div>

                </div>
                <div className=" p-6 flex items-center space-x-4">

                    <div>
                        <p className="text-gray-600 ">
                            2️⃣ Add routing in <strong>App.js</strong>:
                        </p>
                        <div className="mt-4">
                            <SyntaxHighlighter language="javascript" style={solarizedlight}>
                                {`import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Arcomponent from "./components/Arcomponent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/xr" element={<Arcomponent />} />
      </Routes>
    </Router>
  );
};

export default App;`}
                            </SyntaxHighlighter>

                        </div>
                    </div>

                </div>
            </section>
            {/* Step Final: Install the Package */}
            <section className="px-10 mb-8">
                <h2 className="text-2xl mb-2 flex flex-row gap-2 font-semibold ">   <BookCheck className="w-8 h-8 text-blue-500" /><h1>Final Step: Implementing Arcard</h1></h2>
                <div className=" p-6 flex items-center space-x-4">

                    <div>
                        <p className="text-gray-600 ">
                            Now, let&apos;s integrate the <strong>Arcard</strong> component in your application to display 3D models in AR and 3D modes.
                        </p>
                        <div className="mt-4">
                            <SyntaxHighlighter language="jsx" style={solarizedlight}>
                                {`import { Arcard } from "room-craft";

<Arcard
  gltfPath="/models/tree_lamp.glb"
  type="custom-size" // AR and 3D card
  cardColor="#ffffff" // Optional: Set the card color
  cardStyle="minimal" // Optional: Card style (e.g., 'minimal', 'classic')
  customWidth="350px" // Minimum 300px suggested
  customHeight="250px" // Minimum 300px suggested
/>
`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-10 max-w-4xl py-10  mb-8">
                <div className=" p-6 bg-white shadow-sm rounded-xl ">
                    <h2 className="font-semibold text-xl text-gray-800">🎉 You&apos;re All Set!</h2>
                    <p className="text-gray-700 mt-4">
                        Now that you&apos;ve integrated the <strong>Arcard</strong> component, you can display 3D models and preview them in AR. This card is fully customizable, and you can adjust its size, color, and style to fit your needs.
                    </p>
                    <div className="flex items-center mt-4 space-x-2">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        <p className="text-gray-600">Enjoy your 3D and AR experience!</p>
                    </div>
                </div>
            </section>
          



        </div>
    );
}