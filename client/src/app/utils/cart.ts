import { CartItemsType } from "@/types";

export const calculateCartTotals = (cart: CartItemsType) => {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.1;
  const shipping = 10;
  const total = subtotal - discount + shipping;
  return { subtotal, discount, shipping, total };
};
