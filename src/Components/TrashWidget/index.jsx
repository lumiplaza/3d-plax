import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const TrashWidget = ({ itemId }) => {
  const { removeItem } = useContext(CartContext);
  
  return (
    <button
      onClick={() => removeItem(itemId)}>
      Remover Item
    </button>
  );
};