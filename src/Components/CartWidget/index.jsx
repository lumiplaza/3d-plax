import image from '../../assets/Imagenes/CartIcon2.png';
import { CartButton,  ImgCart } from './styles';

const CartWidget = () => {
    return (
        <CartButton>
            <ImgCart src = {image} alt='Cart'/>
        </CartButton>
    )

}

export default CartWidget;