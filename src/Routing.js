import React from 'react';
import { Route, Routes} from "react-router-dom/";
import Products from "./App/Products/containers";
import Cart from "@cart/containers";
import Home from "./App/Home";


export    const Routing = () => {
        return (

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products"  element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    {/*<Route path="/about" element={<About />} />*/}
                    {/*<Route exact path="/order" element={<Order />} />*/}
                </Routes>

        );
};

