import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import Favorites from "./pages/Favorites";
import CartContextProvider from "./context/CartContext";
import ProductDetails from "./pages/ProductDetails";
import PaymnetDone from "./pages/PaymnetDone";
import Login from "./pages/Login/Login";
import Signin from "./pages/Signin/Signin";
import ProtectedRoute from "./Guard/ProtectedRoutes";
import UserContextProvider, { UserContext } from "./context/UserContext";

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
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signin",
          element: <Signin />,
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
      <UserContextProvider>
        <CartContextProvider>
          <RouterProvider router={routers} />
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
