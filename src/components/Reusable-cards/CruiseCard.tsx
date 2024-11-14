import Image from "next/image";

interface CruiseCardProps {
  name: string;
  nights: number;
  sailDate?: string;
  portNames?: string[];
  startPort: string;
  endPort?: string;
  price: number;
  shipImage: string;
  shipName: string;
  cruiseLineName: string;
  iconOverlay: string;
  iconBackgroundColor: string;
}

const CruiseCard: React.FC<CruiseCardProps> = ({
  name,
  nights,
  sailDate,
  startPort,
  //endPort,
  price,
  shipImage,
  shipName,
  //cruiseLineName,
  iconOverlay,
  iconBackgroundColor,
}) => {
  const formattedSailDate = sailDate
    ? new Date(sailDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "N/A";

  return (
    <div className="text-xs border rounded-lg cursor-pointer bg-white flex flex-col justify-center w-64 sm:w-48 h-60 sm:h-60 relative">
      {/* Ship Image */}
      <div className="relative w-52 h-40 sm:w-full sm:h-32 mb-2 overflow-hidden rounded-t-lg">
        <Image
          src={shipImage}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-t-lg transform transition-transform duration-500 hover:scale-105"
          priority //I ensure to load the image as soon as possible during the page load
        />
      </div>

      {/* Cruise Details */}
      <div className="px-1.5">
        <h2
          className="font-semibold sm:font-semibold select-none sm:w-56 tracking-tight"
          style={{
            fontSize: "clamp(0.55rem, 3vw + 0.7rem, 0.67rem)",
          }}
        >
          {name}
        </h2>
        <p className="pb-1">{shipName}</p>

        <p>Nights: {nights}</p>
        <div className="w-full max-w-xs break-words pb-1">
          <p>{formattedSailDate} from</p>
          <p className="font-bold">{startPort}</p>
        </div>
      </div>

      <div
        className="absolute bottom-2 right-2 w-7 h-7 rounded-md flex items-center justify-center"
        style={{ backgroundColor: iconBackgroundColor }}
      >
        <Image src={iconOverlay} alt={"iconOverlay"} height={20} width={20} />
      </div>

      {/* Price */}
      <p className="text-sm font-normal text-black ml-1.5 mt-1 mb-2 self-start hover:animate-emphazise-price">
        £{price}
      </p>
    </div>
  );
};

export default CruiseCard;
