import { useLocation } from 'react-router-dom';
import { XrHitModelContainer } from 'room-craft';

const Arcomponent = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const gltfPath = params.get('gltfPath') || './models/default.gltf';

  console.log(gltfPath)



  console.log("gltfPath:", gltfPath); // Log the gltfPath for debugging

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

export default Arcomponent;

