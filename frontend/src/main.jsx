import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { registerLicense } from '@syncfusion/ej2-base';

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cWWBCf1FpQHxbf1xzZFRHal1RTnVfUj0eQnxTdEZiWH9bcndWQ2JaUEx2Vg==');

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
