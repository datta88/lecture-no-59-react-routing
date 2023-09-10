import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './view/About/About';
import Home from './view/Home/Home';
import Contact from './view/Contact/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <RouterProvider router={router} />
  </>
);

