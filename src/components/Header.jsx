import logo from "../assets/netflix_logo.png";
export const Header = () => {
  return (
    <div className="absolute py-2 px-6  z-10">
      <img className="w-52" src={logo} alt="logo" />
    </div>
  );
};
