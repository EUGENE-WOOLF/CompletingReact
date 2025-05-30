import './ListItemInCart.css';

export default function ListItemInCart({ listItem }) {
    const { item, quantity, unit, purchased } = listItem;

    return (
        <div className={`card ${purchased ? 'purchased' : 'pending'}`}>
            <div className="card-content">
                <h3 className="item-name">{item}</h3>
                <p className="item-details">
                    Quantity: <span>{quantity} {unit}</span>
                </p>
            </div>
            <span className="item-status">
                {purchased ? "Purchased" : "Pending"}
            </span>
        </div>
    );
}