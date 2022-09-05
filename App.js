import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "./src/redux/store";
import Navigation from "./src/navigator/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      
        <Navigation />
     
    </Provider>
  );
}


