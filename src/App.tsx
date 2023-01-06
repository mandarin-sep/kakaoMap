import { useState } from "react";
import DynamicMap from "./Map/DynamicMap";
import KaKaoMapScriptLoader from "./Map/KaKaoMapScriptLoader";
import { PlaceType } from "./Map/mapTypes";
import SearchLocation from "./Map/SearchLocation";

const App = () => {
  const [places, setPlaces] = useState<PlaceType[]>();
  return (
    <KaKaoMapScriptLoader>
      <DynamicMap>
        <SearchLocation
          onUpdatePlaces={(places) => {
            setPlaces(places);
          }}
        />
      </DynamicMap>
    </KaKaoMapScriptLoader>
  );
};

export default App;
