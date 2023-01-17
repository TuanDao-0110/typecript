import { createContext, ReactElement, useState, useEffect } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};
// 1. set up initestea
const initState: ProductType[] = [
  {
    sku: "12345",
    name: "item0001",
    price: 49.99,
  },
  {
    sku: "23456",
    name: "item0002",
    price: 59.99,
  },
  {
    sku: "34567",
    name: "item0003",
    price: 69.99,
  },
];
// const initState: ProductType[] = [];
// 2. create context type
export type UseProductsContextType = { products: ProductType[] };
//3.create context value
const initContextState: UseProductsContextType = {
  products: [],
};

// 4. createContext value

const ProductsContext = createContext<UseProductsContextType>(initContextState);
// 5. create children type:

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};
//6. create provider:

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  // set up date send to value
  const [products, setProducts] = useState<ProductType[]>(initState);
  // call API
//   const fetchProduct = async (): Promise<ProductType[]> => {
//     const data = await fetch("http://localhost:3500/products")
//       .then((res) => res.json())
//       .catch((err) => {
//         if (err instanceof Error) {
//           console.log(err.message);
//         }
//       });
//     return data;
//   };
//   //   fetching data from API and set it to state
//   useEffect(() => {
//     fetchProduct().then((products) => setProducts(products));
//   }, []);
  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};

export default ProductsContext;
