import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/index';
import { useState, useEffect } from "react";
import  { SectionItems } from './styles.jsx';
import { Articles } from "../../mocks/articles";




const ItemListContainer = ( ) => {

    const { category } = useParams();

    const [products,setProducts] = useState([]);

    useEffect(() => {
        new Promise((resolve) => {

            setProducts([]);

            return setTimeout(() => {
              resolve(Articles);
                }, 500);
                }).then((data) => {
            if (category) {
              const categories = data.filter(
                (products) => products.category === category
              );
              setProducts(categories);
            } else {
              setProducts(data);
            }
          });
        }, [category]);


    return (
        <SectionItems>
            <ItemList data={products}/>
        </SectionItems>
    )

}

export default ItemListContainer;