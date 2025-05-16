import Productcomponent from "./Productcomponent"
import { useDispatch } from "react-redux"
import { fakeProducts } from "../data/FakeProducts"
import { setProducts } from "../redux/actions/Productactions"
import { useEffect } from "react"


function ProductListing() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setProducts(fakeProducts))
    }, [dispatch])
    
  return (
    <div className="ui grid container">
        <Productcomponent/>
    </div>
  )
}

export default ProductListing