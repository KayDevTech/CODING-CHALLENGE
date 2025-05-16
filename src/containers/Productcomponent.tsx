import { useSelector } from "react-redux";
import type { RootState } from "../redux/Store";
import type { product } from "../Types";

function Productcomponent() {
  const products = useSelector((state: RootState) => state.allProducts.products);

  return (
    <div className="ui four column grid">
      {products.map((product: product) => {
        const { id, title, price, description, category, image } = product;

        return (
          <div className="column" key={id}>
            <div className="ui linked card">
              <div className="image">
                <img src={image || "https://via.placeholder.com/150"} alt={title || "Product Image"} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta">${price.toFixed(2)}</div>
                {description && <div className="description">{description}</div>}
                {category && <div className="extra">{category}</div>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Productcomponent;
