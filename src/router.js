import { createBrowserRouter } from 'react-router-dom';
import React, {Suspense, useEffect} from 'react';
import Warp from './modules/warp'
import { useNavigate } from 'react-router-dom';
import action from './modules/adminpanel/adminAction';
const Login = React.lazy(()=>import('./modules/login'));
const Main = React.lazy(()=>import('./modules/main'));
const Galery = React.lazy(()=>import('./modules/galery'));
const Contact = React.lazy(()=>import('./modules/contact'));
const Download = React.lazy(()=>import('./modules/download'))


const router=createBrowserRouter([
    {
      path: "/",
      element: <Warp />,
      children: [
        {
          path: "main",
          element:<Suspense fallback={<div>Loading...</div>}> <Main /></Suspense> ,
          errorElement: <Error404 />
        },
        {
          path: "galery",
          element: <Suspense fallback={<div>Loading...</div>}><Galery /></Suspense>,
          errorElement: <Error404 />
        },
        {
          path: "contact",
          element: <Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>,
          errorElement: <Error404 />
        },
        {
          path: "download",
          element: <Suspense fallback={<div>Loading...</div>}><Download /></Suspense>,
          errorElement: <Error404 />
        },
        {
          path: "index.html",
          element: <Redirect /> ,
          errorElement: <Error404 />
        },
        {
          path: 'admin',
          element:<Suspense fallback={<div>Loading...</div>}> <Login /></Suspense>,
          errorElement: <Error404 />,
          action: action,
           
      //     children: [{
      //       path: ':id',
      //       element: <Confirm />,
      //   action: deletePhotoAction,
      // }
      //]
      }
          

  ]},
  {path: "*",
      element: (<Error404 />),}
  ]);

    function Error404()
    {
      return(<><div className="navPlaceholder"></div> 
        <h1 style={{color: 'red', textAlign: 'center'}}> Wystąpił błąd!!!</h1></>
      )
    }


  function Redirect()
 {
    const navigate= useNavigate()
   useEffect(()=>{
   navigate('/main')},)
    return(<div></div>);
  }  
  export {router as default}