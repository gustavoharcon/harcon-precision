import { FaWater } from "react-icons/fa";
import { LuServerCog } from "react-icons/lu";
import { GiMetalPlate } from "react-icons/gi";
import { FaSheetPlastic } from "react-icons/fa6";


export const getIcon = (iconName: string) => {
    switch (iconName) {
        case "water":
            return <FaWater className="icon" />
        case "cnc":
            return <LuServerCog className="icon" />
        case "metal":
            return <GiMetalPlate className="icon" />
        case "sheet":
            return <FaSheetPlastic className="icon" />
        default:
            return null;
    }
}