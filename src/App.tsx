import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Homework } from "./pages/HomeworkPage/Homework";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { ForgetPasswordPage } from "./pages/ForgetPasswordPage/ForgetPasswordPage";
import { ComeUpWithPassword } from "./pages/ComeUpWithPassword/ComeUpWithPassword";

const routerConfig = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/homework",
    element: <Homework />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/forgetpassword",
    element: <ForgetPasswordPage />,
  },
  {
    path: "/comeupwithpassword",
    element: <ComeUpWithPassword />,
  },
]);

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
