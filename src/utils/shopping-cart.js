export const removeItem = (items, id) => items.filter((item) => item.id !== id);

export const changeQuantity = (item, id, value) => (item.id === id && value > 0 ? value : item.quantity);
