import "./RelatedProduct.css";
import data_product from "../ImageData/data";
import Items from "../items/Items";

const RelatedProducts = () => {
  return (
    <div className="relatedproduct">
      <h1>Related Product</h1>
      <hr />
      <div className="relatedproduct-items">
        {data_product.map((item,i) => {
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
