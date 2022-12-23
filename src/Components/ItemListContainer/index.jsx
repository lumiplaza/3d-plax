
import ItemList from '../ItemList/index';
import { useState, useEffect } from "react";
import  { SectionItems } from './styles.jsx';
import { collection, getFirestore, getDocs, doc, where, query} from "firebase/firestore";
import { useParams } from 'react-router';


const ItemListContainer = ( ) => {

    const [products,setProducts] = useState([]);
    const { category, id } = useParams();
    

    useEffect(() => {

      const db = getFirestore();
      const articlesCollection = collection(db, "articles");
      const ref = id ? doc(db, "articles", id) : collection(db, "articles");


      getDocs(articlesCollection).then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(products)
      });

      if (category) {
        const itemsCategory = query(ref, where("category", "==", category));
        getDocs(itemsCategory).then((result) =>
          setProducts(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        );
  
        return;
      };

    }, [category]);


    return (
        <SectionItems>
            <ItemList data={products}/>
        </SectionItems>
    )

}

export default ItemListContainer;