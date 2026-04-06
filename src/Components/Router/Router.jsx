import { createBrowserRouter } from 'react-router';
import App from './../../App';
import Home from '../Pages/HomePage/Home';
import ListedBooks from '../Pages/ListedBooksPage/ListedBooks';
import PagesToRead from '../Pages/PagesToRead/PagesToRead';
import BookDetails from '../Pages/HomePage/Books/BookDetails';

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
      {
        path: '/bookDetails/:id',
        element: <BookDetails />,
      },
    ],
  },
]);
export default Router;
