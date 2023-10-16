import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const AuthHeader = ({ type }: { type: "login" | "signup" }) => {
  const router = useRouter();

  const handleRedirect = (type: string) => {
    router.push("/auth/" + type);
  };
  return (
    <div className="py-2 my-2 flex flex-col gap-1 justify-center items-center w-full">
      <div className="flex flex-col relative">
        <div className="flex gap-4">
          <button
            onClick={() => handleRedirect("login")}
            type="button"
            className="p-1 font-semibold text-gray-700 text-lg"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => handleRedirect("signup")}
            className="p-1 font-semibold text-gray-700 text-lg"
          >
            SignUp
          </button>
        </div>
        <motion.div
          initial={{ width: "0%" }}
          animate={{
            width: type === "login" ? "40%" : "50%",
            left: type === "login" ? "0%" : "50%",
          }}
          transition={{ duration: 0.3 }}
          className="w-auto h-2 absolute -bottom-1 left-0 bg-themeColor rounded-full shadow-md"
        ></motion.div>
      </div>
    </div>
  );
};

export default AuthHeader;
