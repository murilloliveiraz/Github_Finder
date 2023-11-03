import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext.tsx';

//Pages
import Home from './routes/Home/Home.tsx';
import Repos from './routes/Repos/Repos.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/repos/:username', element: <Repos /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
);
