import Navigation from "./Navigation";
import AppHeader from "./AppHeader";
import PopularDes from "./PopularDes";
import TablesBtn from "./TablesBtn";
import Destination from "./views/Destination";

const App = () => {
  return (
    <div>
      <Navigation />
      <AppHeader />
      <PopularDes />
      <TablesBtn />
    </div>
  );
};

export default App;
