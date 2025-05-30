import './global.css'


export default function IndividualProperty({ property }) {
    return (
        <div className="property-card">
            <div className="image-container">
                <img src={property.image} alt={property.title} />
            </div>
            <div className="property-details">
                <h2 className="property-title">{property.title}</h2>
                <div className="property-meta">
                    <p><strong>Location:</strong> {property.location}</p>
                    <p><strong>Price:</strong> ₹{property.price_per_month}/month</p>
                    <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
                    <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
                    <p><strong>Furnished:</strong> {property.furnished}</p>
                </div>
            </div>
        </div>
    );
}
