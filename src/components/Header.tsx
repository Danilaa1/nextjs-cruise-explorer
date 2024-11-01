import Image from "next/image";

const Header = () => {
  return (
    <header className="flext items-start p-3 bg-sky-700">
      <Image
        src="/images/My-kind-of-cruise-logo.png"
        alt="Cruise Logo"
        width={100}
        height={100}
      ></Image>
    </header>
  );
};

export default Header;
