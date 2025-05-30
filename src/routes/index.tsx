import { createBrowserRouter } from "react-router";
import MainLayout from '../layout/MainLayout.tsx';
import App from '../App.tsx';
import About from '../pages/about/index.tsx';
import Contact from "../pages/contact/index.tsx";
import Products from "../pages/products/index.tsx";
import ProductPage from "../pages/product/index.tsx";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product/:productId',
        element: <ProductPage />,
      },
    ],
  },
]);