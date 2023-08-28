import { Header } from "./Header";
const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background_image"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-[rgba(0,0,0,.75)] text-white my-36 mx-auto right-0 left-0 ">
        <h2 className="text-3xl mb-6 font-bold">Sign In</h2>
        <div className="flex flex-col gap-4 opacity-100">
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-3 bg-[#333] outline outline-0 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 bg-[#333] outline outline-0 rounded-md"
          />
          <input
            type="submit"
            className=" bg-red-600 p-3 cursor-pointer mt-6 rounded-md"
            value="Sign In"
          />
          <div className="flex justify-between items-center text-gray-400">
            <label>
              <input type="checkbox" />
              <span> Remember me</span>
            </label>
            <span>Need help?</span>
          </div>
          <div className="text-gray-400 text-sm gap-4 flex flex-col">
            <div>
              New to StreamGPT?{" "}
              <span className="text-white hover:underline cursor-pointer">
                Sign up now
              </span>
            </div>
            <div>
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
