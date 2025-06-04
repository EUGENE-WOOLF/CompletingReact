import { useState } from "react";
import ShoppingListForm from "./ShoppingListFrom";
import { v4 as uuid } from 'uuid';

``

export default function ShoppingList() {

    const [list, setList] = useState([{
        itemName: "Apple",
        qty: 5,
        id: 4
    }])

    function addListItem(item) {
        setList(oldArr => {
            return [...oldArr, {
                itemName: item.itemName,
                qty: item.qty,
                id: uuid()
            }]
        })
    }


    return (
        <>
            <div>
                {
                    list.map(item => {
                        return <div id={item.id}>{item.itemName} -  {item.qty}</div>
                    })
                }
            </div>
            <ShoppingListForm handleSubmit={addListItem} />
        </>

    )
}