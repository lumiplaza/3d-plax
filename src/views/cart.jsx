import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../assets/Imagenes/EmptyCart.png";
import Item  from  "../Components/Item/index"
import { Layout } from "../Components/Layout/Layout";
//import { Loading } from "../components/Loading";
 import { TrashWidget } from "../Components/TrashWidget";
 import { CartContext } from "../context/cartContext";

const CartView = () => {
   const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

    const { productsAdded, clear } = useContext(CartContext);

  const handleFinalizePurchase = () => {
    setIsLoading(true);
    setTimeout(() => {
      clear();
      setIsLoading(false);
      alert("Compra finalizada");
      navigate("/");
    }, 2000); 
  };

  return (
    <Layout>
      <div className="flex flex-col max-w-[50%]">
        {productsAdded.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <img src={EmptyCart} alt="Empty Cart" className="w-44 h-44" />
            <h1 className="text-2xl">No has agregado productos</h1>
          </div>
        ) : (
          <div>
            <div className="flex gap-4">
              {productsAdded.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div className="relative">
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end mt-4">
              {isLoading ? (
                <p>Loading...</p> 
              ) : (
                <button
                  onClick={handleFinalizePurchase}
                  className="rounded-lg p-2 bg-gray-800 text-white"
                >
                  Finalizar Compra
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <div>
            <img src={EmptyCart} alt="Empty Cart" />
      </div>
    </Layout>
  );
};

export default CartView;