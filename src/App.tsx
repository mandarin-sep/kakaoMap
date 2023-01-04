import DynamicMap from "./Map/DynamicMap";
import KaKaoMapScriptLoader from "./Map/KaKaoMapScriptLoader";
import SearchLocation from "./Map/SearchLocation";

const App = () => {
  return (
    <KaKaoMapScriptLoader>
      <DynamicMap />
      <SearchLocation />
    </KaKaoMapScriptLoader>
  );
};

export default App;
