import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { registerLicense } from "@syncfusion/ej2-base";
import { Provider } from "react-redux";
import store from "./redux/Store.js";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
// Registering Syncfusion license key
registerLicense(
  "ORg4AjUWIQA/Gnt2VlhiQlVPd0BHQmFJfFdmRGlddlRwc0U3HVdTRHRcQ19iTX9Qd0BhWXpcd3Q="
  );
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ChakraProvider>
);

// "Ngo9BigBOggjHTQxAR8/V1NHaF5cWWBCf1FpQHxbf1xzZFRHal1RTnVfUj0eQnxTdEZiWH9bcndWQ2JaUEx2Vg=="