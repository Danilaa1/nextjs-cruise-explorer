import Image from "next/image";

interface CruiseCardProps {
  name: string;
  nights: number;
  sailDate: string;
  portNames: string[];
  startPort: string;
  endPort: string;
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
  portNames,
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
    <div className="border rounded-lg shadow-lg p-6 bg-white">
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
      <div className="relative w-full h-48 mb-4">
        <Image
          src={shipName}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      {/* Cruise Details */}
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-gray-500">Nights: {nights}</p>
      <p className="text-gray-500">Sail Date: {sailDate}</p>
      <p className="text-gray-500">Start Port: {startPort}</p>
      <p className="text-gray-500">End Port: {endPort}</p>

      {/* Port Names */}
      <p className="text-gray-500 mt-2">Ports:</p>
      <ul className="list-disc list-inside text-gray-600">
        {portNames.map((port, index) => (
          <li key={index}>{port}</li>
        ))}
      </ul>

      {/* Price */}
      <p className="text-xl font-semibold text-green-600 mt-4">{price}</p>
    </div>
  );
};

export default CruiseCard;
