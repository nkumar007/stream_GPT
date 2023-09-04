import { useEffect, useState } from "react";
import logo from "../assets/netflix_logo.png";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { showGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

export const Header = () => {
  const user = useSelector((store) => store.user);
  const searchVisible = useSelector((store) => store.gpt.isSearchVisible);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleView = () => {
    dispatch(showGptSearch());
  };

  const handleSelection = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("sign out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log("error", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen py-2 px-6 bg-gradient-to-b from-black z-10 flex items-center ">
      <div>
        <img className="w-52" src={logo} alt="logo" />
      </div>

      {user && (
        <>
          {searchVisible && (
            <select
              className="absolute outline-none right-60 py-2 px-4 rounded-sm bg-black text-white"
              onChange={handleSelection}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-[#75a99c] px-3 py-2 text-white rounded-lg absolute right-36"
            onClick={handleView}
          >
            {searchVisible ? "Home" : "GPT Search"}
          </button>
          <div
            className="absolute group right-4 top-0 z-10 py-6  px-6 cursor-pointer flex"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <div>
              <img
                className="w-14 cursor-pointer rounded-2xl"
                src={user?.photoURL}
              />
              {isDropdownVisible && (
                <div className="absolute right-0 z-10 bg-black text-white shadow-lg w-20 mt-2 rounded-md">
                  <div className="absolute w-0 h-0 border-black border-t-0 border-l-4 border-r-4 border-b-8 left-1/2 transform -translate-x-1/2 -top-2"></div>
                  <div
                    className="cursor-pointer py-2 px-2"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
