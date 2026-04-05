import { createBrowserRouter } from 'react-router';
import App from './../../App';
import Home from '../Pages/HomePage/Home';
import ListedBooks from '../Pages/ListedBooksPage/ListedBooks';
import PagesToRead from '../Pages/PagesToRead/PagesToRead';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/listed-books',
        element: <ListedBooks />,
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead />,
      },
    ],
  },
]);
export default Router;
