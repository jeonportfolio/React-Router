import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Me from './routes/Me.jsx'
import NotFound from './routes/NotFound.jsx'
import Bug from './routes/Bug.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import User from './routes/User.jsx'
import Search from './routes/Search.jsx'
import Login from './routes/Login.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
    errorElement: <NotFound/>,
    loader: async () => {
        const message = await new Promise((resolve) => {
              setTimeout(() => {
                  resolve('Data');
              },1000);
        });
        return message;
    }
  },
  {
    path:"/about",
    element:<About/>,
    children: [
      {
        index: true,
        element: <h2>default</h2>,
      },
      {
        path:'me',
        element:<Me/>
      },
    ],
  },
  {
    path:'bug',
    element:<Bug/>,
    errorElement: <ErrorPage/>
  },
  {
    path:'/users/:id',
    element:<User/>
  },
  {
    path:'/search',
    element:<Search/>
  },
  {
    path: '/login',
    element: <Login/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
