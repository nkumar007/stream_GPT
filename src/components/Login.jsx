/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { checkValidation } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Netflix_background } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const emailRef = useRef(null);
  const passRef = useRef(null);
  const nameRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleValidation = () => {
    const message = checkValidation(
      emailRef.current.value,
      passRef.current.value
    );
    setErrorMessage(message);

    if (message) return;

    // Sign In / Sign Up user
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/52521468?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error, "Error while updating user");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Header />
      <div className="absolute  object-cover transform scale-105 brightness-75">
        <img src={Netflix_background} alt="background_image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-[rgba(0,0,0,.75)] text-white my-36 mx-auto right-0 left-0 "
      >
        <h2 className="text-3xl mb-6 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        <div className="flex flex-col gap-4 opacity-100">
          {!isSignInForm && (
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              className="p-3 bg-[#333] outline outline-0 rounded-md"
            />
          )}
          <input
            ref={emailRef}
            type="text"
            placeholder="Email or phone number"
            className="p-3 bg-[#333] outline outline-0 rounded-md"
          />

          <input
            ref={passRef}
            type="password"
            placeholder="Password"
            className="p-3 bg-[#333] outline outline-0 rounded-md"
          />

          <p className="text-sm text-red-600">{errorMessage}</p>

          <input
            onClick={handleValidation}
            type="submit"
            className=" bg-red-600 p-3 cursor-pointer mt-6 rounded-md"
            value={isSignInForm ? "Sign In" : "Sign Up"}
          />
          {isSignInForm && (
            <div className="flex text-xs justify-between items-center text-gray-400">
              <label>
                <input type="checkbox" />
                <span> Remember me</span>
              </label>
              <span className="hover:underline text-xs cursor-pointer">
                <a href="https://www.netflix.com/LoginHelp">Need help?</a>
              </span>
            </div>
          )}

          <div className="text-gray-400 text-xs gap-4 flex flex-col">
            <div>
              {isSignInForm ? "New to Netflix?" : "Already a user?"}{" "}
              <span
                className="text-white hover:underline cursor-pointer"
                onClick={() => setIsSignInForm(!isSignInForm)}
              >
                {isSignInForm ? "Sign up now" : "Sign In"}
              </span>
            </div>
            <div className={!isSignInForm ? "hidden" : "block"}>
              This page is protected by Google reCAPTCHA to ensure you are not a
              bot{" "}
              <span className="text-[#0071eb] cursor-pointer hover:underline">
                Learn more.
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
