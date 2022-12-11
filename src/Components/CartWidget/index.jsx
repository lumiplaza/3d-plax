import image from '../../assets/Imagenes/CartIcon.png';
import { CartButton,  ImgCart } from './styles';
import { Link } from "react-router-dom";


const CartWidget = () => {

      return (
        <CartButton >
            <Link to="/cart">
            <ImgCart  src = {image} alt='Cart'/>
            </Link>
        </CartButton>
    )

}

export default CartWidget;