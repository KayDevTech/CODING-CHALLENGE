 import axios from "axios"  
 import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
 import { useParams } from "react-router-dom"  
import { selectedProduct } from "../redux/actions/Productactions";
import type { RootState } from "../redux/Store";


function Productdetail() {

  const product = useSelector((state: RootState) => state.products)
  const { title, image, price, category, description } = product
  const {productId} = useParams()
  const dispatch = useDispatch();
  console.log("ProductId", productId)

  const fetchProductDetails = async () => {
    try{
      const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      dispatch(selectedProduct(response.data))
      console.log(response.data)
    }
    catch(err){
      console.log("Err", err)
    }

  }

  useEffect(() => {
    if (productId && productId !== ""){
      fetchProductDetails()
    }
  }, [productId])


  
    return (
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>
            ...Loading
          </div>
        ): (

        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical diver">AND</div>
            <div className="column lp">
              <img src={image} alt="title" className="ui fluid image" />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a href="" className="ui teal tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex={0}>
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    )
  }


export default Productdetail