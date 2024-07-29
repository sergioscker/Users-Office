import { createBrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Users from './Pages/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/users-list',
    element: <Users />,
  },
]);

export default router;
