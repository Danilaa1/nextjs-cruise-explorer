import Image from "next/image";

interface AdventureCardProps {
  name: string;
  image: string;
}

const AdventureCard: React.FC<AdventureCardProps> = ({ name, image }) => {
  return (
    <div className="border rounded-lg shadow-md pt-4 bg-blue-50 w-64">
      <div>
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-lg font-bold">{name}</h2>
    </div>
  );
};
export default AdventureCard;
