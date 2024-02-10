import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const NavBar = () => {
  const { logOut, token } = useContext(UserContext);
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
          {token ? (
            <>
              {" "}
              <Link to={"/Favorites"}>
                <button disabled>
                  <img
                    className="w-full"
                    loading="eager"
                    alt=""
                    src="/fav.svg"
                  />
                </button>
              </Link>
              <Link to={"/cart"}>
                <img
                  className="sm:h-8 h-5"
                  loading="eager"
                  alt=""
                  src="/cart.svg"
                />
              </Link>
              <div
                className="no-underline my-auto text-pri font-bold cursor-pointer"
                onClick={() => logOut()}
              >
                logOut
              </div>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="no-underline my-auto text-pri font-bold"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
