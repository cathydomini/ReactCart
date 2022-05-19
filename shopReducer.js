export const initialState = {
  total: 0,
  products: [],
};

const shopReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'ADD_TO_CART':
      console.log ('add to cart');
      console.log (state);
      return {
        ...state,
        products: payload.products,
      };
    case 'UPDATE_PRICE':
      console.log ('UPDATE_PRICE', payload);
      return {
        ...state,
        total: payload.total,
      };

    default:
      throw Error (`No case for type ${type} found`);
  }
};

export default shopReducer;
