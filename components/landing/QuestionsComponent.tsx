import React from "react";
import { motion } from "framer-motion";

const QuestionsComponent = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 mt-10 w-full mb-2 md:px-10 py-8 px-4">
      <h1 className="text-3xl font-semibold">Want To Ask Question?</h1>
      <p>
        Incase you have further questions or need more clarity; You can contact
        us directly or join our community to interact with us
      </p>
      <div className="flex gap-6 p-2">
        <motion.a
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          href="https://t.me/hemify"
          rel="noreferrer"
          target="_blank"
          className="border-themeColor border w-48 py-2 flex justify-center items-center rounded-md text-sm font-medium"
        >
          Contact Us
        </motion.a>
        <motion.a
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          href="https://discord.gg/ASY6e658JB"
          rel="noreferrer"
          target="_blank"
          className="bg-themeColor text-white w-48 py-2 flex justify-center items-center rounded-md text-sm font-medium"
        >
          Join Our Community
        </motion.a>
      </div>
    </section>
  );
};

export default QuestionsComponent;
