import { useState } from "react"

export default function ShoppingListForm({ handleSubmit }) {

    const [shopformData, setshopfromData] = useState({
        itemName: "",
        qty: 0
    })

    function handleChange(e) {
        setshopfromData(oldShopformData => {
            return {
                ...oldShopformData,
                [e.target.name]: e.target.value
            }
        })
    }

    function addItemInShoppingList(e) {
        e.preventDefault();
        handleSubmit(shopformData)
    }



    return (
        <>
            <div>
                <form action="POST" onSubmit={addItemInShoppingList}>
                    <div>
                        <label htmlFor="itemName">Item : </label>
                        <input type="text" name="itemName" id="itemName" value={shopformData.itemName} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="itemQty">Qty : </label>
                        <input type="text" name="qty" id="itemQty" value={shopformData.qty} onChange={handleChange} />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}