import Productcomponent from "./Productcomponent"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../redux/actions/Productactions"
import { useEffect } from "react"
import type { RootState } from "../redux/Store"


function ProductListing() {
   const products = useSelector((state: RootState) => state.allProducts.products)
   const dispatch = useDispatch()

   const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (err) {
      console.log("Err", err);
    }
   }
    

   useEffect(() => {
      fetchProducts()
   }, [])

   console.log("Products", products);
  return (
    <div className="ui grid container">
      <Productcomponent/>
    </div>
  )
}

export default ProductListing