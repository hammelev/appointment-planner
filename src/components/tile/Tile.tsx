import {Contact, Appointment} from "../../types/types";

interface TileProps {
  name: string,
  description: Omit<Contact, "name"> | Omit<Appointment, "name">
}

export default function Tile ({name, description} : TileProps) {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map(value => <p key={typeof(value) === "string" ? value : JSON.stringify(value)} className="tile">{typeof(value) === "string" ? value : JSON.stringify(value)}</p>)}
    </div>
  );
};