
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";


const ItemDetail = ( {item} ) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(item.stock);
    const maxQuantity = currentStock;

    function handleCount(type) {
        if (type === "max" && count < maxQuantity) setCount(count + 1);
        if (type === "min" && count > 1) setCount(count - 1);
      }
    
      function handleAdd() {
        if (currentStock < count) alert("No hay suficiente stock de este producto");
        else setCurrentStock(currentStock - count);
      }
    
      function handleCheckout() {
        navigate("/cart");
      }

      return (
        <div>
                <div>
                    <img src={item.img} alt={item.title} />
                </div>
            <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <span>
                    Price: <strong>${item.price}</strong>
                </span>
                {currentStock > 0 && (
                <p>In Stock: {currentStock}</p>)}
            <div>
                {currentStock > 0 ? (
                <ItemCount count={count} handleCount={handleCount} />
                ) : ( <span>Sin stock</span>)}
            <div>

        <button onClick={handleAdd} disabled={currentStock === 0}>
            Agregar al carrito
        </button>
        <button onClick={handleCheckout}>
            Finalizar Compra
        </button>
            </div>
            </div>
            </div>
        </div>
  );
};

export default ItemDetail;