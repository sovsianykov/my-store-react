import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "../Routing";
import { Layout } from "../Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routing />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
