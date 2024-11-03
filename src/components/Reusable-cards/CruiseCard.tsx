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
  startPort,
  endPort,
  price,
  shipImage,
  shipName,
  cruiseLineName,
  iconOverlay,
  iconBackgroundColor,
}) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 bg-white flex flex-col justify-between h-full">
      {/* Cruise Line and Ship Info */}
      <div className="flex items-start space-x-4 mb-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: iconBackgroundColor }}
        >
          <Image
            src={iconOverlay}
            alt={cruiseLineName}
            width={24}
            height={24}
          />
        </div>
        <div>
          <h3 className="text-lg font-bold">{cruiseLineName}</h3>
          <p className="text-gray-500">{shipName}</p>
        </div>
      </div>
      {/* Ship Image */}
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={shipImage}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg transform transition-transform duration-500 hover:scale-105"
          priority //I ensure to load the image as soon as possible during the page load
        />
      </div>
      {/* Cruise Details */}
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-gray-500">Nights: {nights}</p>
      {/*<p className="text-gray-500">Sail Date: {sailDate}</p> */}
      <p className="text-gray-500">Start Port: {startPort}</p>
      <p className="text-gray-500">End Port: {endPort}</p>

      {/* Port Names */}
      {/* <p className="text-gray-500 mt-2">Ports:</p>*/}
      <ul className="list-disc list-inside text-gray-600">
        {portNames.map((port, index) => (
          <li key={index}>{port}</li>
        ))}
      </ul>

      {/* Price */}
      <p className="text-lg font-semibold text-green-600 mt-4 self-start hover:animate-emphazise-price">
        £{price}
      </p>
    </div>
  );
};

export default CruiseCard;
