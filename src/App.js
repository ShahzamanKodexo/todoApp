import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./Route";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  root.render(
    <div>
      <Routers />
    </div>
  );
};

export default App;
