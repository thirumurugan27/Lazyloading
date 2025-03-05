import Todolist from "./Todolist"
import Login from "./Login"
import Home from "./Home"
import NavBar from "./Navbar"
import { BrowserRouter ,Routes,Route,Link} from "react-router-dom"
import Products from "./Products"
import ProductList from "./ProductList"
import ProductDetails from "./ProductDetails"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
 
  let user = "Larry"

  return (
    <>
        

        
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/:newuser" element={<Login />} />
            <Route path="/products" element={<Products />} >
              <Route index element={<ProductList/>}/>
              <Route path="list" element={<ProductList />} />
              <Route path="details" element={<ProductDetails />} />
            </Route>

            <Route path="/todolist" element={<Todolist />} />
          </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App
