
import { StrictMode } from "react";  
import { createRoot } from "react-dom/client";


import App from "./Pro-12(movies-new)/App.jsx";
import MovieContextProvider from "./Pro-12(movies-new)/Components/Context/movieContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </StrictMode>
);