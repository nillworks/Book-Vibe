import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import Router from './Components/Router/Router.jsx';
import BookContextProvider from './Components/Contexts/BookContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookContextProvider>
      <RouterProvider router={Router} />
    </BookContextProvider>
  </StrictMode>,
);
