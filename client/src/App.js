import { Home } from "./Views";
import { NavBar } from "./Components";
const App = () => {
  return (
    <div>
      <NavBar />
      <Home inicio="Se monto Home" />
    </div>
  );
};

export default App;
