import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Frontpage from '../pages/Frontpage';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: '/',
            element: <Frontpage></Frontpage>,
         },
      ],
   },
]);
