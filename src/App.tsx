import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Homework } from "./pages/HomeworkPage/Homework";

const routerConfig = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/homework',
    element: <Homework />
  }
])

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig}/>
    </div>
  );
};

export default App;
