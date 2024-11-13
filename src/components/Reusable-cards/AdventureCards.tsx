import Image from "next/image";

interface AdventureCardProps {
  name: string;
  image: string;
}

const AdventureCard: React.FC<AdventureCardProps> = ({ name, image }) => {
  return (
    <div className="border rounded-xl cursor-pointer bg-white w-full sm:w-48 h-36 sm:h-40 flex flex-col items-center">
      <div className="relative h-40 w-40 sm:w-full overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h2 className="text-sm sm:text-md font-semibold text-center mt-2 mb-2 select-none px-1">
        {name}
      </h2>
    </div>
  );
};
export default AdventureCard;
