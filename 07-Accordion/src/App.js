import React from "react";

import Accor from "./accordion";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <h1 className="mt-5 display-5 text-center text-danger">
        Accordeon avec React et Bootstrap
      </h1>
      <Accor />
    </div>
  );
}

export default App;
