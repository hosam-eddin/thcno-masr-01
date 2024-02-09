import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import Favorites from "./pages/Favorites";
import CartContextProvider from "./context/CartContext";
import ProductDetails from "./pages/ProductDetails";
import PaymnetDone from './pages/PaymnetDone';

function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "Favorites",
          element: <Favorites />,
        },
        {
          path: ":id/productdetails",
          element: <ProductDetails />,
        },
        {
          path: "paymentdone",
          element: <PaymnetDone />,
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <CartContextProvider>
        <RouterProvider router={routers} />
      </CartContextProvider>
    </>
  );
}

export default App;
