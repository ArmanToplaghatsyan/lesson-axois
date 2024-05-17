import React from "react";

import {useRoutes} from 'react-router-dom'
import { Layout } from "../pages/Layout";
import { Prodcuts } from "../pages/Products";
import { AddProdcuts } from "../pages/AddProduct";
import { ProdcutDetails } from "../pages/ProductDetails";
import { MyError } from "../pages/MyError";

export const MyRouter = React.memo(() => {
    const router = useRoutes([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {path: '', element: <Prodcuts/>},
                {path: 'addProducts', element: <AddProdcuts/>},
                {path: 'detailsProduct/:id', element: <ProdcutDetails/>},
            ]
        },
        {
            path: '*',
            element: <MyError/>
        }
    ])

    return router
})