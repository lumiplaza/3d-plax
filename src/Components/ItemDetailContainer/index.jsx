import  ItemDetail  from "../ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Articles } from "../../mocks/articles";

const ItemDetailContainer = () => {

    const [item, setItem] = useState('');
    const { id } = useParams();


    useEffect(() => {
        new Promise((resolve) =>
            setTimeout(() => resolve(Articles.find((item) => item.id === id)), 1000)
            ).then((data) => setItem(data));
        }, [id]);

        if (!item) {
            return <p> Loading...</p>;
        }

    return (
        <div>
            <ItemDetail data={item} />
        </div>
        
    )
};

export default ItemDetailContainer;