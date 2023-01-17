import React, { ReactElement } from "react";
import useCart from "../hooks/useCart";
import useProduct from "../hooks/useProduct";
import { UseProductsContextType } from "../context/ProductsProvider";
import Product from "./Product";

function ProductList() {
  // 1. use cart to hanlde 
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProduct();
  let pageContent: ReactElement | ReactElement[] = <p>loading...</p>;
  if (products?.length) {
    pageContent = products.map((product) => {
      // 1. check wheather it is picked or not
      const inCart: boolean = cart.some((item) => item.sku === product.sku);
      return <Product key={product.sku} 
      product={product} 
      REDUCER_ACTIONS={REDUCER_ACTIONS} 
      dispatch={dispatch} 
      inCart={inCart} />;
    });
  }
  const content = <main className="main main--products">{pageContent}</main>;
  return content;
}

export default ProductList;
