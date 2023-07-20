import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "../src/pages/home/home.scss";
import Footer from "./component/footer/Footer";
import Manu from "./component/manu/Manu";
import Navber from "./component/navbar/Navber";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Signup from "./pages/signup/Signup";
import Users from "./pages/users/Users";
import "./styles/global.scss";

function App() {
  // layout components

  const Layout = () => {
    return (
      <div className="main">
        <Navber />
        <div className="container">
          {/* manu continer  */}
          <div className="manuContiner">
            <Manu />
          </div>
          {/* content continer  */}
          <div className="contentContiner">
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    );
  };

  // all routes components
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
