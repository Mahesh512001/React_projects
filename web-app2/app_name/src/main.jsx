import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
  import { NetflixIndex } from './netflix/netflix.index.jsx'
  import { DataBinding } from "./component/data-binding/data-binding.jsx";

  createRoot(document.getElementById('root')).render(
    <StrictMode>
       <DataBinding/>
  </StrictMode>

  )


