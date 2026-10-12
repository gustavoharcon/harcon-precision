import { FaWater } from "react-icons/fa";
import { LuServerCog } from "react-icons/lu";
import { GiMetalPlate, GiPlanetCore } from "react-icons/gi";
import { FaSheetPlastic } from "react-icons/fa6";
import { LiaIndustrySolid } from "react-icons/lia";
import { BiCertification } from "react-icons/bi";
import { SiOnlyoffice, SiSpeedtest } from "react-icons/si";

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
        case "industry":
            return <LiaIndustrySolid className="icon" />
        case "core":
            return <GiPlanetCore className="icon" />
        case "certification":
            return <BiCertification className="icon" />
        case "office":
            return <SiOnlyoffice className="icon" />
        case "prototyping":
            return <SiSpeedtest className="icon" />
        default:
            return null;
    }
}