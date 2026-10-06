import { FaWater } from "react-icons/fa";


export const getIcon = (iconName: string) => {
    switch (iconName) {
        case "water":
            return <FaWater className="icon" />

        default:
            return null;
    }
}