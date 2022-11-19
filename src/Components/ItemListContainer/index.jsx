import ItemCount from "../ItemCount";
import ItemList from '../ItemList/index';
import { useState, useEffect } from "react";
import  { SectionItems } from './styles.jsx';


const articles = [
    {id: 1, title: 'Spider-Man', image: "https://i.ibb.co/PThzY7z/Spider-man.png"},
    {id: 2, title: 'Mario Bros', image: 'https://i.ibb.co/D8Zntmx/Mario-Bros.png'},
    {id: 3, title: 'Luffy', image: 'https://i.ibb.co/8M62z4H/Luffy.png'},
    {id: 4, title: 'Batman', image: 'https://i.ibb.co/ysXr241/Batman.png'},
    {id: 5, title: 'Yoda', image: 'https://i.ibb.co/hXPp43L/Yoda.png'},
    {id: 6, title: 'Mewtwo', image: 'https://i.ibb.co/C0QKJSB/Mewtwo.png'},
    {id: 7, title: 'Wolverine', image: 'https://i.ibb.co/6XLzXPk/Wolverine.png'},
    {id: 8, title: 'Eduward Elric', image: 'https://i.ibb.co/wKT79xN/Edward-Elric.png'},
    {id: 9, title: 'Gimli', image: 'https://i.ibb.co/0Z4ZG9M/Gimli.png'},
    {id: 10, title: 'Iron Man', image: 'https://i.ibb.co/jV8qy0p/Iron-Man.png'},
    {id: 11, title: 'Mikasa', image: 'https://i.ibb.co/W3L1JvC/Mikasa.png'},
    {id: 12, title: 'Bowser', image: 'https://i.ibb.co/HYTPR6V/Bowser.png'},
]

const ItemListContainer = ( ) => {

    const [data,setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(articles);
            },3000);
        });
           getData.then(res => setData(res)) 
        }, [])

    const onAdd = (cantidad) => {
        alert(`Vas a agregar ${cantidad} elemento(s) al carrito`);
    }

    return (
        <SectionItems>
            <ItemList data={data}/>
            <ItemCount initial={1} stock={6} onAdd={onAdd}/>
        </SectionItems>
    )

}

export default ItemListContainer;