import { ImgContainer , Img } from './styles';

const Item = ({info}) => {
    return (
        <ImgContainer>
            <p>{info.title}</p>
            <Img src={info.image} alt='Image Item' />
        </ImgContainer>
    );
};

export default Item;