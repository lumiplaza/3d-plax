import { ImgContainer , Img } from './styles';
import { useNavigate } from "react-router-dom"



const Item = ({art, quantityAdded }) => {
    const navigate = useNavigate();

    //const description = art.description.slice(0, 30);
    // const title = art.name.slice(0, 20);

    function handleNavigate() {
      navigate(`/item/${art.id}`);
    }

    console.log((`/item/${art.id}`))


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