import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Home from './pages/Home'
import Login from './pages/Login'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
        //Refetching API while switch TAB: default(true)
        refetchOnWindowFocus: true,
    }
  }
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <section className="pt-24 pb-16 h-screen">
        <div className="w-full px-16">
          <Home />
          <Login />
        </div>
      </section>
    </QueryClientProvider>
  )
}

export default App
