import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import Profile from "./pages/Profile/Profile";
// import Website from "./pages/Websites/Website";
import WebsiteMarket from "./pages/Websites/WebsiteMarket";
import { AuthProvider } from "./components/Auth-context";
import Setting from "./pages/Settings/Setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/",
        element: <WebsiteMarket />,
      },

      // {
      //   path: "/website",
      //   element: <Website />,
      // },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
