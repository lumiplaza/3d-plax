import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import ItemView from "../views/item";
import CategoryView from "../views/category";
import CartView from "../views/cart";

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
        element: <ItemView />,
      },
      {
        path: "/cart",
        element: <CartView />,
      },


])