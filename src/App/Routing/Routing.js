import React from "react";
import { Route, Routes } from "react-router-dom/";
import Products from "../Products/containers";
import Cart from "@cart/containers";
import Home from "../Home";
import { appRouter } from "@/App/Routing/appRouter";

export const Routing = () => {
  return (
    <Routes>
      <Route path={appRouter.Home} element={<Home />} />
      <Route path={appRouter.Products} element={<Products />} />
      <Route path={appRouter.Cart} element={<Cart />} />
      {/*<Route path="/about" element={<About />} />*/}
      {/*<Route exact path="/order" element={<Order />} />*/}
    </Routes>
  );
};
