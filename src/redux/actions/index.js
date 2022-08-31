// To add item to cart
export const addCart = (product) => {
  return {
    type: 'ADD_ITEM',
    payload: product,
  };
};

// To remove Item From Cart
export const delCart = (product) => {
  return {
    type: 'REMOVE_ITEM',
    payload: product,
  };
};
