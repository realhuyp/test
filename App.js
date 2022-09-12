import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "./src/redux/store";
import Navigation from "./src/navigator/Navigation";
import { PersistGate } from "redux-persist/integration/react";


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}


