const initialState = {
  Products: [],
  Cart: [],
  GoogleData: {},
};
Products.push(...Products)

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return { ...state, Products: action.payload };

    case "ADD_TO_CART":
    
      const checkCart = state.Cart.find(
        (product) => product.id === action.payload.id
      );
      if (checkCart === undefined) {
        let data = { ...action.payload, qty: 1 };
        state.Cart.push(data);
      }
    
      return { ...state, Cart: state.Cart };

    case "DELETE_FROM_CART":
      return {
        ...state,
        Cart: state.Cart.filter((product) => product.id !== action.payload),
      };
    case "INCREMENT_QTY":
      const incPrd = state.Cart.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            qty: product.qty + 1,
          };
        }
        return product;
      });
      return { ...state, Cart: incPrd };
    case "DECREMENT_QTY":
      const decPrd = state.Cart.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            qty: product.qty - 1,
          };
        }
        return product;
      })
      return {
        ...state,
        Cart: decPrd,
      };
    case "GOOGLE_ACTION":
      return {
        ...state,
        GoogleData: action.payload,
      };

    default:
      return state;
  }
};
export default RootReducer;
