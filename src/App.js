import { Provider } from "react-redux";
import "./App.css";

import store from "./utils/store";
import { RouterProvider } from "react-router-dom";

import { appRouter } from "./utils/routes";

function App() {
  return (
    <Provider store={store}>
      <div>
      
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
