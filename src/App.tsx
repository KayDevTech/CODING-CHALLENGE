import Header from "./containers/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductListing from "./containers/ProductListing"
import Productdetail from "./containers/Productdetail"

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<ProductListing/>}/>
        <Route path="/product/:productId" element={<Productdetail/>}/>
        <Route>404 Not Found!</Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App