import ListItemInCart from "../ListItemInCart/ListItemInCart";
import './ShoppingList.css';

export default function ShoppingList({ shoppingList }) {
    return (
        <div className="shopping-list">
            <ul>
                {shoppingList.map(item => (
                    <li key={item.id}>
                        <ListItemInCart listItem={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
