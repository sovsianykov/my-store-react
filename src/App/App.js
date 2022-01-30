import React  from "react";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./Layout/containers/MainLayout/MainLayout";
import { Routing } from "../Routing/Routing";
import Navbar from "./Layout/containers/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routing />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
