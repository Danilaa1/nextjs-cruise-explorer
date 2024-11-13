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
  //sailDate, //This interface is not used in the component
  portNames = [],
  //startPort,
  endPort,
  price,
  shipImage,
  //shipName,
  //cruiseLineName,
  iconOverlay,
  iconBackgroundColor,
}) => {
  return (
    <div className="text-xs border rounded-lg cursor-pointer bg-white flex flex-col justify-center w-64 sm:w-48 h-60 sm:h-56 relative">
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

      <div
        className="absolute bottom-2 right-2 w-7 h-7 rounded-md flex items-center justify-center"
        style={{ backgroundColor: iconBackgroundColor }}
      >
        <Image src={iconOverlay} alt={""} height={20} width={20} />
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
        <p className="text-gray-500">Nights: {nights}</p>
        <p className="text-gray-500">End Port: {endPort}</p>

        {/*<p className="text-gray-500">Sail Date: {sailDate}</p> */}
        {/*<p className="text-gray-500">Start Port: {startPort}</p>*/}

        {/* Port Names */}
        {/* <p className="text-gray-500 mt-2">Ports:</p>*/}
        <ul className="list-disc list-inside text-gray-600">
          {portNames.map((port, index) => (
            <li key={index}>{port}</li>
          ))}
        </ul>
        {/* Price */}
        <p className="text-sm font-normal text-black mt-2 mb-2 self-start hover:animate-emphazise-price">
          £{price}
        </p>
      </div>
    </div>
  );
};

export default CruiseCard;
