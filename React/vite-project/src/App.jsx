import './App.css'
import ShoppingList from '../Components/ShoppingList/ShoppingList'
import RentalProperty from '../Components/RentalProperty/RentalProperty';
import Event from '../Components/events/Event';
import FormEvent from '../Components/FormEvent/FromEvent';
import Click from '../Components/Click/Click';
import Counter from '../Components/Counter/Counter';


const propertyData = [

  {
    id: 1,
    title: "Cozy 1BHK Apartment",
    location: "Kothrud, Pune",
    price_per_month: 18000,
    bedrooms: 1,
    bathrooms: 1,
    furnished: "Semi-Furnished",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    available_from: "2025-06-10"
  },
  {
    id: 2,
    title: "Modern 2BHK Flat",
    location: "Indiranagar, Bangalore",
    price_per_month: 35000,
    bedrooms: 2,
    bathrooms: 2,
    furnished: "Fully Furnished",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
    available_from: "2025-07-01"
  },
  {
    id: 3,
    title: "Studio Apartment for Students",
    location: "Kalyanpur, Kanpur",
    price_per_month: 9500,
    bedrooms: 1,
    bathrooms: 1,
    furnished: "Unfurnished",
    image: "https://images.unsplash.com/photo-1600585152930-a2f6227debfd",
    available_from: "2025-06-20"
  }
];

// You can now access this like:
// console.log(propertyData[0].title); // "Cozy 1BHK Apartment"




function App() {
  return (
    <>

    </>
  )
}

export default App

// const shoppingList = [
//   {
// {/* <Event />
//  */}
// {/* <Click message="hello world" /> */}
// {/* <FormEvent /> */}
// {/* <RentalProperty propertyData={propertyData} /> */}
// {/* <ShoppingList shoppingList={shoppingList} /> */}
//     id: 1,
//     item: "Milk",
//     quantity: 2,
//     unit: "liters",
//     purchased: false
//   },
//   {
//     id: 2,
//     item: "Bread",
//     quantity: 1,
//     unit: "loaf",
//     purchased: true
//   },
//   {
//     id: 3,
//     item: "Eggs",
//     quantity: 12,
//     unit: "pcs",
//     purchased: false
//   },
//   {
//     id: 4,
//     item: "Bananas",
//     quantity: 6,
//     unit: "pcs",
//     purchased: false
//   },
//   {
//     id: 5,
//     item: "Chicken Breast",
//     quantity: 500,
//     unit: "grams",
//     purchased: true
//   }
// ];