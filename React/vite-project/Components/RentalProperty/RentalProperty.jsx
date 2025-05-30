import './global.css'

import IndividualProperty from "./IndividualProperty";

export default function RentalProperty({ propertyData }) {
    return (
        <ul className="property-list">
            {propertyData.map((element) => (
                <li key={element.id}>
                    <IndividualProperty property={element} />
                </li>
            ))}
        </ul>
    );
}
