import { ImgContainer , Img } from './styles';
import { useNavigate } from "react-router-dom"


const Item = ({art}) => {
    const navigate = useNavigate();

    // const description = art.description.slice(0, 2);
     //  const title = art.title.slice(0, 20);  art.title.length > 20 ? `${title} ...` :

    function handleNavigate() {
      navigate(`/item/${art.id}`);
    }

    return (
        <ImgContainer>
            <div>
                <div>
                    <span> 
                        {art.title}
                    </span>
                    <Img src={art.image} alt="personaje img"/>
                      <button onClick={handleNavigate}>
                        ver detalles
                    </button>
                </div>
            </div>
        </ImgContainer>
    );
};

export default Item;