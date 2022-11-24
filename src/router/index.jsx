import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Item from "../Components/Item";
import CategoryView from "../views/CategoryView";

export const router = createBrowserRouter ([

    {
        path: "/",
        element: <App />,
    },
    {
        path: "/category/:category",
        element: <CategoryView />,
      },
      {
        path: "/item/:id",
        element: <Item />,
      },

])