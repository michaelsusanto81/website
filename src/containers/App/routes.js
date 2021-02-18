import About from "../About";
import Home from "../Home";
import Portfolio from "../Portfolio";

export const routes = [
    {
        key: 1,
        component: Home,
        exact: true,
        path: "/",
    },
    {
        key: 2,
        component: Portfolio,
        exact: true,
        path: "/portfolio",
    },
    {
        key: 3,
        component: About,
        exact: true,
        path: "/about",
    }
];