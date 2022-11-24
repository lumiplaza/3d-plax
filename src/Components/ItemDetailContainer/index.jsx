import  ItemDetail  from "../ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { articles } from "../../mocks/articles";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(articles);
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve) =>
            setTimeout(() => resolve(Items.find((item) => item.id === id)), 1000)
            ).then((data) => setItem(data));
        }, [id]);

        if (!item) {
            return <p> Loading...</p>;
        }

    return (
        <ItemDetail item={item} />
    )
};

export default ItemDetailContainer;