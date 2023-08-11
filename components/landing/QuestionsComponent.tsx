import React from "react";

const QuestionsComponent = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 mt-10 w-full mb-2 md:px-10 py-8 px-4">
      <h1 className="text-3xl font-semibold">Want To Ask Question?</h1>
      <p>
        Incase you have further questions or need more clarity; You can contact
        us directly or join our community to interact with us
      </p>
      <div className="flex gap-6 p-2">
        <button className="border-themeColor border w-48 py-2 rounded-md text-sm font-medium">
          Contact Us
        </button>
        <button className="bg-themeColor text-white w-48 py-2 rounded-md text-sm font-medium">
          Join Our Community
        </button>
      </div>
    </section>
  );
};

export default QuestionsComponent;
