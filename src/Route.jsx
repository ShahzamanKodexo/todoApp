import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          {ROUTES.map(
            (
              { auth: AppRoute, component: Component, path, exact, ...others },
              i
            ) => (
              <Route
                key={i}
                exact={exact}
                path={path}
                element={
                  <AppRoute>
                    <Component {...others} />
                  </AppRoute>
                }
              />
            )
          )}

          <Route
            path="*"
            element={<div className="container">Route Not found</div>}
          />
        </Routes>
      </Router>
    </div>
  );
};
export default Routers;
