import logo from "../assets/netflix_logo.png";
export const Header = () => {
  return (
    <div className="absolute py-2 px-6 bg-gradient-to-b from-black z-10">
      <img className="w-44" src={logo} alt="logo" />
    </div>
  );
};
