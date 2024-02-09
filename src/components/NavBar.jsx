import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className=" self-stretch bg-whitesmoke-100  py-4 pr-5 ">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <Link to={"/"}>
          <img
            className="h-[66px] w-[227px] relative object-cover cursor-pointer"
            loading="eager"
            alt=""
            src="/rectangle-1@2x.png"
          />
        </Link>
        <div className="flex gap-6">
          <Link to={"/Favorites"}>
            <button disabled>
              <img className="h-8" loading="eager" alt="" src="/fav.svg" />
            </button>
          </Link>
          <Link to={"/cart"}>
            <img className="h-8" loading="eager" alt="" src="/cart.svg" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
