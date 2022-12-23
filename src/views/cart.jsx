import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../assets/Imagenes/EmptyCart.png";
import Item  from  "../Components/Item/index"
import { Layout } from "../Components/Layout/Layout";
 import { TrashWidget } from "../Components/TrashWidget";
 import { CartContext } from "../context/cartContext";
 


const CartView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { productsAdded, totalAmount } = useContext(CartContext);

    function goToLogin() {
      navigate("/login");}


  return (
    <Layout>
      <div>
        {productsAdded.length === 0 ? (
          <div>
            <img src={EmptyCart} alt="Empty Cart" />
            <h1>No has agregado productos</h1>
          </div>
        ) : (
          <div>
            <div>
              {productsAdded.map((art) => {
                const quantityAdded = art.quantityAdded;



                return (
                  <div>
                    <Item
                      art={art.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={art.item.id} />
                  </div>
                );
              })}
            </div>
                <span>
                  Total a pagar: <strong>${totalAmount}</strong>
                </span>
            <div>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <button onClick={goToLogin}>
                  COMPRAR
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;