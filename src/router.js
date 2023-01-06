import { createBrowserRouter } from 'react-router-dom';
import Warp from './modules/warp'
import Main from './modules/main'
import Galery from './modules/galery';


const router=createBrowserRouter([
    {
      path: "/",
      element: <Warp />,
      children: [
        {
          path: "main",
          element: <Main />,
        },
        {
          path: "galery",
          element: <Galery />,
        },
  ]}
  ]);

  export {router as default}