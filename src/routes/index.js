import {lazy} from "react";
import {ABOUT_ROUTE, BASE_ROUTE, PRODUCTS_ROUTE} from "./consts";

const Base = lazy(() => import("../pages/Base/Base").then(module => module));
const About = lazy(() => import("../pages/About/About").then(module => module));
const Products = lazy(() => import("../pages/Products/Products").then(module => module));

const routes = [
    {
        path: BASE_ROUTE,
        Component: Base
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: PRODUCTS_ROUTE,
        Component: Products
    }
];

export {routes};