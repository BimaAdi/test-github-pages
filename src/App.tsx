import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { IndexRoute } from './routes'
import { CounterRoute } from './routes/counter'
import { FormLoaderRoute, loader as  FormLoaderLoader } from './routes/formloader'


const router = createBrowserRouter(([
  {
    path: "/",
    element: <IndexRoute />
  },
  {
    path: "/counter",
    element: <CounterRoute /> 
  },
  {
    path: "/formloader",
    loader: FormLoaderLoader,
    element: <FormLoaderRoute />
  }
]))

export const App = () => {
  return <RouterProvider router={router}/>
}


export default App
