import { Contact, Appointment } from "../../types/types";
import Tile from "../tile/Tile";


interface TileListProps {
    tileList: Array<Contact> | Array<Appointment>
}

export default function TileList({ tileList }: TileListProps) {
    
    
    return (
        <div>
            {tileList.map(({name, ...description}, index) => <Tile key={name+index} name={name} description={description}/>)}
        </div>
    );
};