import { Provider } from "react-redux";
import { store } from "./redux/store";
import ComboDeal from "./pages/ComboDeal";

function App() {
  return (
    <Provider store={store}>
      <ComboDeal />
    </Provider>
  );
}

export default App;
