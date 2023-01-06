import { useState } from "react";
import DynamicMap from "./Map/DynamicMap";
import KaKaoMapScriptLoader from "./Map/KaKaoMapScriptLoader";
import MapMarkerController from "./Map/MapMarkerController";
import { PlaceType } from "./Map/mapTypes";
import SearchLocation from "./Map/SearchLocation";

const App = () => {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  return (
    <KaKaoMapScriptLoader>
      <DynamicMap>
        <MapMarkerController places={places} />
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
