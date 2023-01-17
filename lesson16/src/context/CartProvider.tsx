import { createContext, ReactElement, useMemo, useReducer } from "react";

// 1.create cart item type
export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  qty: number;
};
// 2. create state type with array of CartItemType
type CartStateType = {
  cart: CartItemType[];
};
// 3. set up state which is type CartStateType
const initCartState: CartStateType = { cart: [] };
// 4. create enum Action
enum REDUCER_ACTION_TYPE {
  ADD,
  REMOVE,
  QUANTITY,
  SUBMIT,
}
// 5. 
export type ReducerActionType = typeof REDUCER_ACTION_TYPE;
// 6. set up type of reducer action include type vs action
export type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: CartItemType;
};
// 7. create reducer and handle with action
const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action payload missing in add");
      }
      const { sku, name, price } = action.payload;
      //   1. find  item not  in add
      const filteredCart: CartItemType[] = state.cart.filter((item) => item.sku !== sku);
      //   2. find item need to add and update
      const itemExists: CartItemType | undefined = state.cart.find((item) => item.sku === sku);
      const qty: number = itemExists ? itemExists.qty + 1 : 1;
      //   3. return with none item need to add and set new update item with new qty
      return { ...state, cart: [...filteredCart, { sku, name, price, qty }] };
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("action payload missing in quantity");
      }

      const { sku, qty } = action.payload;
      //   1. find  item not  in add
      const filteredCart: CartItemType[] = state.cart.filter((item) => item.sku !== sku);
      //   2. find item need to add and update
      const itemExists: CartItemType | undefined = state.cart.find((item) => item.sku === sku);
      if (!itemExists) {
        throw new Error("item must exist");
      }
      const updatedItem: CartItemType = { ...itemExists, qty };
      return { ...state, cart: [...filteredCart, updatedItem] };
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action payload missing in remove");
       }
      const { sku, name, price } = action.payload;
      //   1. find  item not  in add
      const filteredCart: CartItemType[] = state.cart.filter((item) => item.sku !== sku);
      return { ...state, cart: [...filteredCart] };
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }
    default:
      throw new Error("unidefined action");
  }
};
// 8. use reducer to add to hook useReducer vs return many 
const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);
  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);
  //   use reduce fn add total item
  const totalItems: number = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.qty;
  }, 0);
  const totalPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.qty * cartItem.price;
    }, 0)
  );
  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));
    return itemA - itemB;
  });
  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};
// 9. final create type of context with have a type like useCartContext
export type UseCartContextType = ReturnType<typeof useCartContext>;
// 10. because now create value for it before use createContext
const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: "",
  cart: [],
};
// 11. now set up a CartContext
export const CartContext = createContext<UseCartContextType>(initCartContextState);
// 12. set up type for children element:
type ChildrenType = { children?: ReactElement | ReactElement[] };
// 13. set up Provider
export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return <CartContext.Provider value={useCartContext(initCartContextState)}>{children}</CartContext.Provider>;
};

export default CartContext;
