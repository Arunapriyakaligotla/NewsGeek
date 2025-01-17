import React from "react";
import "./App.css";
import Navbar2 from "./Navbar2";
import Navbar1 from "./Navbar1";
import News from "./News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar1 /> <br />
          <Navbar2 />

          <div className="container">
            <div className="row">

              <Routes>
                <Route
                  path="/"
                  element={<News key="general" category="general" />}
                />
                <Route
                  path="/Entertainment"
                  element={<News key="entertainment" category="entertainment" />}
                />
                <Route
                  path="/Technology"
                  element={<News key="technology" category="technology" />}
                />
                <Route
                  path="/Sports"
                  element={<News key="sports" category="sports" />}
                />
                <Route
                  path="/Business"
                  element={<News key="business" category="business" />}
                />
                <Route
                  path="/Health"
                  element={<News key="health" category="health" />}
                />
                <Route
                  path="/Science"
                  element={<News key="science" category="science" />}
                />
              </Routes>
            </div>

          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
