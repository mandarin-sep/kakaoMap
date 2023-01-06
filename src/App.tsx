import { useState } from "react";
import DynamicMap from "./Map/DynamicMap";
import KaKaoMapScriptLoader from "./Map/KaKaoMapScriptLoader";
import MapMarkerController from "./Map/MapMarkerController";
import { PlaceType } from "./Map/mapTypes";
import SearchLocation from "./Map/SearchLocation";

const App = () => {
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState("");
  return (
    <KaKaoMapScriptLoader>
      <DynamicMap>
        <MapMarkerController
          places={places}
          selectedPlaceId={selectedPlaceId}
        />
        <SearchLocation
          onSelect={(placeId) => {
            setSelectedPlaceId(placeId);
          }}
          onUpdatePlaces={(places) => {
            setPlaces(places);
          }}
        />
      </DynamicMap>
    </KaKaoMapScriptLoader>
  );
};

export default App;
