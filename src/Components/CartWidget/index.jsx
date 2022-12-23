import { useContext } from "react";
import image from '../../assets/Imagenes/CartIcon.png';
import { CartButton,  ImgCart } from './styles';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";


const CartWidget = () => {

    const { productsAdded } = useContext(CartContext);
    const count = productsAdded.length;

      return (
        <CartButton >
            <Link to="/cart">
            <ImgCart  src = {image} alt='Cart'/>
            </Link>
            {count > 0 && (
          <span>
            {count}
          </span>
        )}
        </CartButton>
        
    )

}

export default CartWidget;