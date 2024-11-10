import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { IndexRoute } from './routes'
import { CounterRoute } from './routes/counter'
import { FormLoaderRoute, loader as  FormLoaderLoader } from './routes/formloader'
import { PREFIX } from './settings'


const router = createBrowserRouter(([
  {
    path: `${PREFIX}/`,
    element: <IndexRoute />
  },
  {
    path: `${PREFIX}/counter`,
    element: <CounterRoute /> 
  },
  {
    path: `${PREFIX}/formloader`,
    loader: FormLoaderLoader,
    element: <FormLoaderRoute />
  }
]))

export const App = () => {
  return <RouterProvider router={router}/>
}


export default App
