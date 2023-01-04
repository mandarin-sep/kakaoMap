import DynamicMap from "./Map/DynamicMap";
import KaKaoMapScriptLoader from "./Map/KaKaoMapScriptLoader";

const App = () => {
  return (
    <KaKaoMapScriptLoader>
      <DynamicMap />
    </KaKaoMapScriptLoader>
  );
};

export default App;
