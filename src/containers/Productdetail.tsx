 import axios from "axios"  
 import { useEffect } from "react"
 import { useParams } from "react-router-dom"  

function Productdetail() {

  const {productId} = useParams()
  console.log("ProductId", productId)

  // const fetchProductDetails = async () => {
  //   const response = await axios
  //   .get(`https://fakestoreapi.com/products/${productId}`)
  //   .catch((err) => {
  //     console.log("Err", err)
  //   })
  //   console.log(response.data)
  // }

  return (
    <div>Productdetail</div>
  )
}

export default Productdetail