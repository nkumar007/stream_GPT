import { useState } from "react";
import { Header } from "./Header";
import { signOut } from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Browse = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("You were signed out");
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("error", error);
      });
  };

  return (
    <div className="relative">
      <Header />
      <div
        className="absolute group right-4 z-10 py-6 px-6 cursor-pointer"
        onMouseEnter={() => setDropdownVisible(true)}
        onMouseLeave={() => setDropdownVisible(false)}
      >
        <img className="w-14 cursor-pointer" src={user?.photoURL} />

        {isDropdownVisible && (
          <div className="absolute right-0 z-10 bg-black text-white shadow-lg w-20 mt-2 rounded-md">
            <div className="absolute w-0 h-0 border-black border-t-0 border-l-4 border-r-4 border-b-8 left-1/2 transform -translate-x-1/2 -top-2"></div>
            <div className="cursor-pointer py-2 px-2" onClick={handleSignOut}>
              Sign Out
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
