import { image } from "@/src/helper";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2x1 mx-auto mt-20 space-x-8 md:space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <Image src={image.seatGirls} />
        </div>
        {/* conatant */}
        <div className="lg:w-2/5">
          <div className="text-3xl font-bold lg:w-1/2 mb-3">
            <h3 className="text-primary">
              We have been improving our product{" "}
              <h3 className="text-secondary">for many years.</h3>
            </h3>
          </div>
          <p className="text-base text-tartiary font-semibold lg:w-1/2 mb-3">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="bg-secondary mt-5 font-semibold text-white px-4 py-2 rounded transition-all duration-400 hover:bg-primary">
            Get Started
          </button>
        </div>
      </div>
      <div className="h-10"></div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">

      <div className="md:w-1/2">
          <Image src={image.girlsWithearth} />
        </div>
        <div className="lg:w-2/5">
          <div className="text-3xl font-bold lg:w-1/2 mb-3">
            <h3 className="text-primary">
              You can Practice at any<h3 className="text-secondary">time convinent for you.</h3>
            </h3>
          </div>
          <p className="text-base text-tartiary font-semibold lg:w-1/2 mb-3">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="bg-secondary mt-5 font-semibold text-white px-4 py-2 rounded transition-all duration-400 hover:bg-primary">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};
export default About;
