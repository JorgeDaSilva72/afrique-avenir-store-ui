import { Suspense } from "react";
import CartPage from "./Cartpage";

export default function CartPageWrapper() {
  return (
    <Suspense fallback={<div>Chargement du panier...</div>}>
      <CartPage />
    </Suspense>
  );
}
