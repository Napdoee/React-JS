import { QueryClient, QueryClientProvider } from "react-query";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Link,
  Route,
  Routes
} from "react-router-dom";

import ErrorPage from "./views/error-page";
import NotFound from "./views/not-found";
import Layout from './views/layout'
import Home from './views/Home';
import Api from './views/';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    }
  }
})

const router = createBrowserRouter([,
  { 
    path: "*", 
    Component: Root,
    errorElement: <ErrorPage />
  }
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/api" element={<Api />} />
        <Route path="/blog" element={<h1>Hello Blog</h1>} />
        <Route path="/users/*" element={<h1>Hello Users</h1>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App