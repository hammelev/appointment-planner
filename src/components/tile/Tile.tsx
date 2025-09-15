import { Contact, Appointment } from "../../types/types";

type TileDescription = Omit<Contact, "name"> | Omit<Appointment, "name">;

interface TileProps {
  name: string;
  description: TileDescription;
}

const renderDescription = (description: TileDescription) => {
  return Object.entries(description).map(([key, value]) => {
    const displayValue = value instanceof Date ? value.toLocaleString() : String(value);
    return <p key={key} className="tile">{`${key}: ${displayValue}`}</p>;
  });
};

export default function Tile({ name, description }: TileProps) {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {renderDescription(description)}
    </div>
  );
}
