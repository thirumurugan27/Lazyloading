import NavBar from "./Navbar"
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetails from "./ProductDetails"
import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy, Suspense } from "react"

function App() {
  const LazyProductlist = lazy(() => import('./ProductList'))

  const LazyLogin = lazy(() => import('./Login'))
  const LazyTodolist = lazy(() => import('./Todolist'))

  let user = "Larry"

  return (
    <>
      <BrowserRouter basename="/Lazyloading">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home/>} />

          <Route path="/login/:newuser" element={<Suspense fallback={<div className="load"><p>Loading...</p></div>}>
            <LazyLogin />
          </Suspense>} />

          <Route path="/" element={<Suspense fallback={<div className="load"><p>Loading...</p></div>}>
            <LazyProductlist />
          </Suspense>} />

          <Route path="details" element={<ProductDetails />} />
          <Route path="/todolist" element={<Suspense fallback={<div className="load"><p>Loading...</p></div>}>
            <LazyTodolist />
          </Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App