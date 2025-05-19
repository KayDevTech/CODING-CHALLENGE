import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../redux/Store";
import type { product } from "../Types";

function Productcomponent() {
  const products = useSelector((state: RootState) => state.allProducts.products);
  
  const renderList = products.map((product: product) => {
    const { id,  title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="column">
            <div className="ui linked card">
              <div className="image">
                <img src={image} alt= {title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );

  })

  return(
    <>
     {renderList}
    </>
  )

}

export default Productcomponent;
