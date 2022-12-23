
import { useContext, useState } from "react";
import  ItemCount  from "../ItemCount";
import { CartContext } from "../../context/cartContext";



const ItemDetail = ( {data} ) => {

    const { addItem } = useContext(CartContext);
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(5);
    const maxQuantity = currentStock;

    function handleCount(type) {
        if (type === "max" && count < maxQuantity) setCount(count + 1);
        if (type === "min" && count > 1) setCount(count - 1);
      }
    
      function handleAdd() {
        if (currentStock < count) alert("No hay suficiente stock de este producto");
        else {
            setCurrentStock(currentStock - count);
            addItem(data, count);
          }
      }

      return (
        <div>
             <div>
                    <img src={data.image} alt={data.title} />
                </div>
                 <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <span>
                    Price: <strong>${data.price}</strong>
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
      
            </div>
            </div>
            </div> 
        </div>
  );
};

export default ItemDetail;