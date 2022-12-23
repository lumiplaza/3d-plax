import  ItemDetail  from "../ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Articles } from "../../mocks/articles";
import { doc, getFirestore, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [item, setItem] = useState('');
    const { id } = useParams();
    const [imagenes, setImagenes] = useState([]);
    



    useEffect(() => {

        const db = getFirestore();
        const refProps = [db, "articles"];
        const ref = id ? doc(...refProps, id) : collection(...refProps);

        if (id) {
            getDoc(ref)
              .then((item) => {
                console.log({ item });
                if (item.exists()) {
                  setItem({ id: item.id, ...item.data() });
                }
              })
              .catch((err) => console.error({ err }));
            return;
          }
  }, []);

    return (
        <div>
            <ItemDetail data={item} />
        </div>
        
    )
};

export default ItemDetailContainer;