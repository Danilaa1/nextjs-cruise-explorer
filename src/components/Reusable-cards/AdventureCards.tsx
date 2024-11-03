import Image from "next/image";

interface AdventureCardProps {
  name: string;
  image: string;
}

const AdventureCard: React.FC<AdventureCardProps> = ({ name, image }) => {
  return (
    <div className="border rounded-xl shadow-md p-3 bg-blue-50 w-52 flex flex-col justify-between items-center">
      <div className="relative w-32 h-32 mb-2 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg, w-64 mb-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h2 className="text-sm font-medium text-center mb-1">{name}</h2>
    </div>
  );
};
export default AdventureCard;
