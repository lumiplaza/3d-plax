
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import  ItemCount  from "../ItemCount";



const ItemDetail = ( {data} ) => {
    
   // const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(5);
    const maxQuantity = currentStock;

    function handleCount(type) {
        if (type === "max" && count < maxQuantity) setCount(count + 1);
        if (type === "min" && count > 1) setCount(count - 1);
      }
    
      function handleAdd() {
        if (currentStock < count) alert("No hay suficiente stock de este producto");
        else setCurrentStock(currentStock - count);
      }
    
       /*function handleCheckout() {
        navigate("/cart");
      }*/

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
        {/*<button onClick={handleCheckout}>
            Finalizar Compra
        </button> */}
            </div>
            </div>
            </div> 
        </div>
  );
};

export default ItemDetail;