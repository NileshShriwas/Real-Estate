import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './layout.scss';
import HomePage from './routes/homePage/HomePage';
import ListPage from './routes/listPage/ListPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/list',
      element: <ListPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
