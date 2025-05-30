import Toggler from "../Components/Toggler/Toggler"
import MainBox from "../Components/ColorBox/MainBox";



const exoticColors = [
    "#FF9933", // Electric Mandarin
    "#9966CC", // Mystic Orchid
    "#FF6F61", // Neon Coral
    "#FF4500", // Solar Flare
    "#4FD1C5", // Aqua Dream
    "#2E8B57", // Emerald Lagoon
    "#0B3D91", // Deep Space
    "#FFB07C", // Peach Sunset
    "#B19CD9", // Lavender Mist
    "#D4AF37", // Golden Ember
    "#30D5C8", // Turquoise Tide
    "#9B1B30"  // Crimson Twilight
];


export default function Page2() {
    return (
        <>
            <MainBox color={exoticColors} />
            {/* <Toggler /> */}
        </>
    )
}