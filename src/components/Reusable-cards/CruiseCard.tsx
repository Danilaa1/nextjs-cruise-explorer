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
    <div className="text-xs border rounded-lg cursor-pointer bg-white flex flex-col justify-center w-64 max-w-xs sm:w-48 h-auto sm:h-52 relative">
      {/* Ship Image */}
      <div className="relative w-full h-40 sm:h-32 mb-2 overflow-hidden rounded-t-lg">
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
      <div className="px-2">
        <h2 className="text-xs font-semibold select-none">{name}</h2>
        <p className="text-gray-500">Nights: {nights}</p>
        <p className="text-gray-500">End Port: {endPort}</p>

        {/*<p className="text-gray-500">Sail Date: {sailDate}</p> */}
        {/*<p className="text-gray-500">Start Port: {startPort}</p>
         */}

        {/* Port Names */}
        {/* <p className="text-gray-500 mt-2">Ports:</p>*/}
        <ul className="list-disc list-inside text-gray-600">
          {portNames.map((port, index) => (
            <li key={index}>{port}</li>
          ))}
        </ul>
        {/* Price */}
        <p className="text-sm font-normal text-green-600 mt-2 mb-2 self-start hover:animate-emphazise-price">
          £{price}
        </p>
      </div>
    </div>
  );
};

export default CruiseCard;
