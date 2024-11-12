import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-start p-4 bg-dark-blue drop-shadow-md shadow-2xl rounded-b-lg md:rounded-none m-0 md:m-1">
      <Image
        src="/images/My-kind-of-cruise-logo.png"
        alt="Cruise Logo"
        width={100}
        height={100}
        className="relative left-0 md:left-14"
        style={{ width: "auto", height: "auto" }}
      ></Image>
    </header>
  );
};

export default Header;
