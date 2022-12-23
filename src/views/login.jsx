import { Layout } from "../Components/Layout/Layout";
import { collection, getFirestore, addDoc, doc, updateDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const LoginView = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const {productsAdded: items, clear, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const enviarCompra = () => {
    setIsLoading(true);
    setTimeout(() => {
      clear();
      setIsLoading(false);
      alert("Compra finalizada");
      navigate("/");
    }, 2000); 
  };

  const getTotalByProduct = (quantity, price) => {
    return quantity * price;
  };

  const handleFinalizePurchase = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;
    const email = event.target[2].value;

    setIsLoading(true);

    const total = items
      .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    const ventas = {
      buyer: { name, phone, email },
      items,
      total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "ventas");

    addDoc(ordersCollection, ventas)
      .then(() => {
        setUpdatingProducts(true);
      })
      .catch((err) => console.error({ err }))
      .finally(() => {});
  };

  useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();

      items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
          stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
          .then(() => {
            clear();
            setIsLoading(false);
            alert("Compra finalizada");
            navigate("/");
          })
          .catch((err) => console.error(err));
      });
    }
    
  }, [updatingProducts]);


    return (
        <Layout>
          <form onSubmit={handleFinalizePurchase} className="flex flex-col w-1/2">
        <div>
            <h2>Ingrsa tus datos</h2>
          <input
            placeholder="Nombre Completo"
            required
          />
          <input
            placeholder="Numero de Telefono"
            type="number"
            required
          />
          <input
            placeholder="Email"
            type={"email"}
            required
          />
        </div>
        <span>
          Total a pagar: <strong>${totalAmount}</strong>
        </span>
        <button

          type="submit"
          disabled={isLoading}

        >
          Enviar Datos
        </button>
        <button onClick={enviarCompra}>Finalizar compra</button>
      </form>
        </Layout>
      );
    };
    export default LoginView;