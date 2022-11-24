import Item from "../Item"


const ItemList = ({ data = [] }) => {
    return(
        data.map (articles => <Item key={articles.id} art={articles} /> )
    )
}

export default ItemList;