import Item from "../Item"


const ItemList = ({ data = [] }) => {
    return(
        data.map (articles => <Item key={articles.id} info={articles} /> )
    )
}

export default ItemList;