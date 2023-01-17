import React, { memo, ReactElement, ReactNode } from "react";
import { ProductType } from "../context/ProductsProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";
type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};
function Product({ product, dispatch, REDUCER_ACTIONS, inCart }: PropsType): ReactElement {
  // this is how we take any link from our folder to project !
  const img: string = new URL(`../images/${product.name}.jpg`, import.meta.url).href;
  const onAddToCart = () => {
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });
  };
  const itemInCart = inCart ? "=> Item in cart" : null;
  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" />
      <p>
        {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );
  console.log(`render product ${product.name}`);
  return content;
}

const areItemEqual = ({ product: prevProduct, inCart: prevInCart }: PropsType, { product: nextProduct, inCart: nextInCart }: PropsType) => {
  return Object.keys(prevProduct).every((key) => {
    return prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType] && prevInCart === nextInCart;
  });
};

const MemoizedProduct = memo<typeof Product>(Product, areItemEqual);
// export default Product;
export default MemoizedProduct;
