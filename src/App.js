import './App.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from './layouts/Main';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import About from './components/About/About';
import { productAndCartLoader } from './loaders/ProductAndCart';

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    loader: async () => {
                        return fetch('products.json');
                    },
                    element: <Shop></Shop>
                },
                {
                    path: '/about',
                    element: <About></About>
                },
                {
                    path: '/inventory',
                    element: <Inventory></Inventory>
                },
                {
                    path: '/orders', 
                    loader: productAndCartLoader,
                    element: <Orders></Orders>
                },
            ]
        }
    ])

    return (
        <div className="">
            <RouterProvider router = {router}></RouterProvider>
        </div>
    );
}

export default App;
