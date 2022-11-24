import { ImgContainer , Img } from './styles';
import { useNavigate } from "react-router-dom"

const Item = ({art}) => {
    const navigate = useNavigate();

    const description = art.description.slice(0, 30);
    const title = art.title.slice(0, 20);

    function handleNavigate() {
      navigate(`/item/${art.id}`);
    }

    return (
        <ImgContainer>
            <div onClick={handleNavigate}>
                <div>
                    <span> 
                        {art.title.length > 20 ? `${title} ...` : art.title}
                    </span>
                    <Img src={art.image} alt="personaje img"/>

                    <p> {art.description.length > 30
                         ? `${description} ...` : art.description}
                    </p>
                </div>
            </div>
        </ImgContainer>
    );
};

export default Item;