import { Home, Login, Register } from './pages/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <div className='overflow-x-hidden'>
      <RouterProvider router={router} />
    </div>
  );
}
